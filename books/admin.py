from django.contrib import admin
from .models import Book, Checkout
# Register your models here.

admin.site.register(Book)
admin.site.register(Checkout)