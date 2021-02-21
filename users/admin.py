from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Permission
from django.utils.translation import gettext, gettext_lazy as _

from rest_framework.authtoken.models import Token
from users.models import (
    User,
)

admin.site.register(User)
admin.site.register(Permission)
