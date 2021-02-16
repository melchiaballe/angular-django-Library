from django.urls import path, re_path
from .api import (
    Users,
    User,
    ChangePassword,
    Login,
    Logout,
    Register,
    ForgotPassword,
    ResetPassword,
    ActivateAccount,
    ChangeEmail
)

urlpatterns = [

    path('', Users.as_view({
        'get': 'get',
    }), name="users"),

    path('auth/', User.as_view({
        'get': 'get',
        'post': 'update',
    }), name="user_detail"),

    path('auth-user/', User.as_view({
        'get': 'get_current',
    }), name="current-user"),

    path('auth/deactivate/', User.as_view({
        'post': 'deactivate',
    }), name="user-deactivate"),

    path('auth/register/', Register.as_view(), name="register"),
    # path('auth/new-user/', RegisterSubscription.as_view(), name="new-user-register"),
    path('auth/login/', Login.as_view(), name="login"),
    path('auth/logout/', Logout.as_view(), name="logout"),
    path('auth/password/', ChangePassword.as_view(), name="change_password"),
    path('auth/email/', ChangeEmail.as_view(), name="change_email"),
    path('auth/forgot-password/', ForgotPassword.as_view(), name='forgot-password'),
    path('auth/reset-password/', ResetPassword.as_view(), name='reset-password'),
    path('auth/activate-account/', ActivateAccount.as_view(), name='activate-account'),

]
