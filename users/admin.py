from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Permission
from django.utils.translation import gettext, gettext_lazy as _

from rest_framework.authtoken.models import Token
from users.models import (
    User,
    ForgotPassword,
    ActivateAccount,
)
# Register your models here.


# class UserAdmin(UserAdmin):
#     """User Admin Panel Configuration."""

#     model = User
#     readonly_fields = ('date_joined',)
#     ordering = ('email',)
#     filter_horizontal = ('groups', 'user_permissions')
#     list_display = ('email', 'username', 'first_name', 'last_name', 'date_joined')

#     fieldsets = (
#         (None, {'fields': ('email','username', 'password')}),
#         (_('Personal info'), {'fields': ('first_name', 'last_name',)}),
#         (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
#             'groups', 'user_permissions',)}),
#         (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
#     )

#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'username', 'password1', 'password2'),
#         }),
#     )


admin.site.register(User)
admin.site.register(ForgotPassword)
admin.site.register(ActivateAccount)
admin.site.register(Permission)
