import os
import datetime
import pytz
import hashlib
from time import gmtime, strftime

from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.core.mail import send_mail
from django.template.loader import render_to_string

from django.db import models
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from django.utils import timezone

from rest_framework.authtoken.models import Token

from .managers import UserManager
#from PIL import Image

class User(AbstractBaseUser, PermissionsMixin):
    """ Account User Information. """

    email = models.EmailField(max_length=500, unique=True)
    username = models.CharField(max_length=80, unique=True, null=True, blank=True)
    first_name = models.CharField(max_length=80, null=True, blank=True)
    last_name = models.CharField(max_length=80, null=True, blank=True)
    #avatar = models.ImageField(upload_to=user_media_path,
                               #default='/default/img.jpg')
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    # is_activated = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"
    # REQUIRED_FIELDS = ("username", "first_name", "last_name",)

    _image = _cover = None

    objects = UserManager()

    def __str__(self):
        return "{}".format(self.email)

    # def delete_image(self, image):
    #     """Delete the existing user image."""
    #     if image.url != '/media/default/img.jpg' and os.path.exists(image.url):
    #         os.remove(image.path)
    #     return

    def get_token(self):
        """Generate a Valid User Token."""
        token, created = Token.objects.get_or_create(user=self)
        expiry_date = token.created + datetime.timedelta(days=settings.AUTH_TOKEN_EXPIRY_TIME)

        if not created and expiry_date < timezone.now():
            # delete token
            token.delete()
            # generate a new one
            token = Token.objects.create(user=self)

        return token

    # def download_img(self, imgurl):
    #     try:
    #         self.download(imgurl)
    #     except Exception as e:
    #         # silently pass this exception since it only
    #         # means that the image source is not accessible.
    #         pass

    def get_full_name(self):
        """Return User's Complete Name."""

        if self.first_name and self.last_name:
            return "{} {}".format(self.first_name.title(),
                                  self.last_name.title())
        return self.email


@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        User.get_token(instance)


class ForgotPassword(models.Model):
    PENDING = 1
    USED = 2

    STATUS_CHOICES = (
        (PENDING, 'Pending'),
        (USED, 'Used')
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=255, blank=True)
    status = models.IntegerField(default=PENDING, choices=STATUS_CHOICES)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {}".format(self.user, self.status)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        if not self.id:
            # Set token
            curr_time = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            string_to_hash = "{}{}".format(self.user.email, curr_time)
            self.token = hashlib.sha256(string_to_hash.encode('utf-8')).hexdigest()

            try:
                confirm_link = settings.WEBAPP_RESET_PASSWORD_PATH
            except Exception as e:
                raise ValueError("Missing setting: WEBAPP_RESET_PASSWORD_URL")

            base_url = "{}{}/".format(settings.PROTOCOL, settings.DOMAIN_NAME)
            token_link = "{}{}/{}".format(base_url, confirm_link, self.token)

            email_context = {
                'token': token_link,
                'full_name': self.user.get_full_name()
            }

            # Email templates
            email_plain = render_to_string('email/reset_password/email.txt', email_context)
            email_html = render_to_string('email/reset_password/email.html', email_context)

            # Send email to user
            send_mail(
                'SignalsBench - Reset Password',
                email_plain,
                settings.DEFAULT_FROM_EMAIL,
                [self.user.email],
                html_message=email_html,
            )

            # Send email celery task
            # from defaults.tasks import send_email_celery
            # send_email_celery.delay(
            #     'SignalsBench - Reset Password',
            #     email_plain,
            #     settings.DEFAULT_FROM_EMAIL,
            #     [self.user.email],
            #     html_message=email_html,
            # )
        super(ForgotPassword, self).save()


class ActivateAccount(models.Model):
    PENDING = 1
    USED = 2

    STATUS_CHOICES = (
        (PENDING, 'Pending'),
        (USED, 'Used')
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=255, blank=True)
    status = models.IntegerField(default=PENDING, choices=STATUS_CHOICES)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {}".format(self.user, self.status)

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        if not self.id:
            # Set token
            curr_time = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            string_to_hash = "{}{}".format(self.user.email, curr_time)
            self.token = hashlib.sha256(string_to_hash.encode('utf-8')).hexdigest()

            try:
                confirm_link = settings.WEBAPP_ACTIVATE_ACCOUNT_PATH
            except Exception as e:
                raise ValueError("Missing setting: WEBAPP_ACTIVATE_ACCOUNT_PATH")

            base_url = "{}{}/".format(settings.PROTOCOL, settings.DOMAIN_NAME)
            token_link = "{}{}/{}".format(base_url, confirm_link, self.token)

            email_context = {
                'token': token_link,
                'full_name': self.user.get_full_name()
            }

            # Email templates
            email_plain = render_to_string('email/activate_account/email.txt', email_context)
            email_html = render_to_string('email/activate_account/email.html', email_context)

            #Send email to user
            send_mail(
                'SignalsBench - Activate Account',
                email_plain,
                settings.DEFAULT_FROM_EMAIL,
                [self.user.email],
                html_message=email_html,
            )

            # Send email celery task
            # from defaults.tasks import send_email_celery
            # send_email_celery.delay(
            #     'SignalsBench - Activate Account',
            #     email_plain,
            #     settings.DEFAULT_FROM_EMAIL,
            #     [self.user.email],
            #     html_message=email_html,
            # )
        super(ActivateAccount, self).save()




