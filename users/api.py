import datetime

from django.conf import settings
from django.contrib.auth import logout
from django.http import HttpResponseRedirect
from django.utils import timezone
from django.core.mail import send_mail
from django.contrib.auth.hashers import make_password
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.template.loader import render_to_string

from rest_framework.parsers import MultiPartParser
from rest_framework import parsers, renderers
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet


from .serializers import (
    AuthTokenSerializer,
    UserSerializer,
    PasswordSerializer,
    RegisterSerializer,
    ForgotPasswordSerializer,
    ResetPasswordSerializer,
    EmailSerializer,
    TokenSerializer,
    # RegisterwSubscriptionSerializer
)

# Had to set an alias because of conflict with
# existing ViewSet named User
from .models import(
    User as UserModel,
    ForgotPassword as ForgotPasswordModel,
    ActivateAccount as ActivateAccountModel,
)

from utils.mixins import get_object_or_None


class Login(APIView):
    """ user authentication endpoint
    """
    authentication_classes = ()
    permission_classes = (AllowAny,)
    serializer_class = AuthTokenSerializer

    def post(self, *args, **kwargs):
        """ accepts post data that contains user credentials
            and validates it. Returns a generated token.
        """
        serializer = self.serializer_class(
            data=self.request.data, request=self.request)
        serializer.is_valid(raise_exception=True)

        # TODO: bind the response data to the serializer
        # to make it much cleaner and robust
        return Response({
            'token': serializer.get_token().key,
            'user_id': serializer.user.id
        }, status=200)


class Logout(APIView):
    """
        Logout EndPoint
    """
    permission_classes = (IsAuthenticated,)

    def post(self, *args, **kwargs):
        """
           Logout User
        """
        logout(self.request)
        return Response(status=204)


class Register(APIView):
    """ Register endpoint
    """
    authentication_classes = ()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

    def post(self, *args, **kwargs):
        serializer = self.serializer_class(data=self.request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, created = Token.objects.get_or_create(user=user)
            return Response(status=200)
        return Response(serializer.errors, status=400)


# class RegisterSubscription(APIView):
#     """ Register User with Subscription endpoint
#     """
#     authentication_classes = ()
#     permission_classes = (AllowAny,)
#     serializer_class = RegisterwSubscriptionSerializer

#     def post(self, *args, **kwargs):
#         serializer = self.serializer_class(data=self.request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             token, created = Token.objects.get_or_create(user=user)
#             return Response({
#                 'token': token.key,
#                 'user_id': user.pk,
#                 'email': user.email
#             }, status=200)
#         return Response(serializer.errors, status=400)


class ChangePassword(APIView):
    """
        User Password EndPoint
    """
    permission_classes = (AllowAny,)

    def post(self, *args, **kwargs):
        """
            Create User Password
        """
        serializer = PasswordSerializer(
            data=self.request.data, request=self.request)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=204)

    def put(self, *args, **kwargs):
        """
            Update User Password
        """
        serializer = PasswordSerializer(
            data=self.request.data,
            request=self.request)
        if serializer.is_valid():
            serializer.save()

            email_context = {
                'full_name': self.request.user.get_full_name()
            }

            # Email Templates
            email_plain = render_to_string('email/change_password/email.txt')
            email_html = render_to_string('email/change_password/email.html')

            send_mail(
                'SignalsBench - Change Password',
                email_plain,
                settings.DEFAULT_FROM_EMAIL,
                [self.request.user.email],
                html_message=email_html,
            )
            return Response(status=204)
        return Response(serializer.errors, status=400)


class ChangeEmail(APIView):
    """
        User Email EndPoint
    """
    permission_classes = (AllowAny,)

    def put(self, *args, **kwargs):
        """
            Change User Email
        """
        serializer = EmailSerializer(instance=self.request.user,
                                    data=self.request.data,
                                    request=self.request)

        if serializer.is_valid():
            serializer.save()

            email_context = {
                'full_name': self.request.user.get_full_name()
            }

            # Email Templates
            email_plain = render_to_string('email/change_email/email.txt', email_context)
            email_html = render_to_string('email/change_email/email.html', email_context)

            send_mail(
                'SignalsBench - Change Email',
                email_plain,
                settings.DEFAULT_FROM_EMAIL,
                [self.request.user.email],
                html_message=email_html,
            )

            return Response(status=204)
        return Response(serializer.errors, status=400)


class Users(ViewSet):
    """ users endpoint
    """
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def get(self, *args, **kwargs):
        users = UserModel.objects.all()
        serializer = self.serializer_class(users, many=True)
        return Response(serializer.data, status=200)


class User(ViewSet):
    """ user endpoint
    """
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)
    parser_class = (MultiPartParser,)

    def get(self, *args, **kwargs):
        serializer = self.serializer_class(
            instance=self.request.user)
        return Response(serializer.data, status=200)

    def get_current(self, *args, **kwargs):
        user = UserModel.objects.get(id=self.request.GET.get('id'))
        serializer = self.serializer_class(instance=user)
        return Response(serializer.data, status=200)

    def update(self, *args, **kwargs):
        serializer = self.serializer_class(
            data=self.request.data,
            instance=self.request.user)

        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=200)

    def deactivate(self, *args, **kwargs):
        if self.request.user.has_usable_password():
            if self.request.user.check_password(self.request.data['password']):
                self.request.user.is_active = False
                self.request.user.save()

                email_context = {
                    'full_name': self.request.user.get_full_name()
                }

                # Email templates
                email_plain = render_to_string('email/deactivate_account/email.txt', email_context)
                email_html = render_to_string('email/deactivate_account/email.html', email_context)

                # Send email to user
                send_mail(
                    'SignalsBench - Deactivate Account',
                    email_plain,
                    settings.DEFAULT_FROM_EMAIL,
                    [self.request.user.email],
                    html_message=email_html,
                )
                return Response(status=204)
        return Response(status=400)


class ForgotPassword(APIView):
    """ Forgot Password Endpoint
    """
    permission_classes = (AllowAny,)

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(ForgotPassword, self).dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        serializer = ForgotPasswordSerializer(
            data=self.request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=204)


class ResetPassword(APIView):
    """
    View for users to reset their forgotten password
    """

    permission_classes = (AllowAny,)

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(ResetPassword, self).dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        token = self.request.data.get('token')
        token_obj = ForgotPasswordModel.objects.filter(token=token,
                                                       status=ForgotPasswordModel.PENDING)

        if not token_obj.exists():
            token_msg = 'Your token is invalid. Please request another.'
            return Response({'non_field_errors': [token_msg]}, status=400)

        data = {
            'password': self.request.data.get('new_password'),
            'confirm_password': self.request.data.get('confirm_new_password')
        }
        serializer = ResetPasswordSerializer(data=data)
        if serializer.is_valid():
            user_token = token_obj[0]
            user = user_token.user
            user.password = make_password(serializer.data['password'])
            user.save()

            user_token.status = ForgotPasswordModel.USED
            user_token.save()

            email_context = {
                'full_name': user.get_full_name()
            }

            # Email Templates
            email_plain = render_to_string('email/change_password/email.txt', email_context)
            email_html = render_to_string('email/change_password/email.html', email_context)

            send_mail(
                'SignalsBench - Change Password',
                email_plain,
                settings.DEFAULT_FROM_EMAIL,
                [user.email],
                html_message=email_html,
            )

            return Response(status=200)
        return Response(serializer.errors, status=400)


class ActivateAccount(APIView):
    """
    View for users to activate their account
    """
    permission_classes = (AllowAny,)

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(ActivateAccount, self).dispatch(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        token = request.GET.get('token')
        token_obj = ActivateAccountModel.objects.get(token=token)
        if token_obj:
            user = UserModel.objects.get(id=token_obj.user_id)
            user_token = Token.objects.filter(user=user.id)
            serializer = TokenSerializer(user_token, many=True)
            return Response(serializer.data, status=200)
        return Response(status=400)

    def post(self, request, *args, **kwargs):
        token = self.request.data.get('token')
        token_obj = ActivateAccountModel.objects.filter(token=token,
                                                        status=ActivateAccountModel.PENDING)
        if not token_obj.exists():
            token_msg = 'Your token is invalid. Please request another.'
            return Response({'non_field_errors': [token_msg]}, status=400)
        else:
            user_token = token_obj[0]
            user = user_token.user
            user.is_active = True
            user.save()

            user_token.status = ForgotPasswordModel.USED
            user_token.save()

            #WELCOME SEND EMAIL
            email_context = {
                'full_name': user.get_full_name()
            }

            # Email Templates
            email_plain = render_to_string('email/welcome/email.txt', email_context)
            email_html = render_to_string('email/welcome/email.html', email_context)

            send_mail(
                'SignalsBench - Welcome',
                email_plain,
                settings.DEFAULT_FROM_EMAIL,
                [user.email],
                html_message=email_html,
            )

            return Response(status=200)


