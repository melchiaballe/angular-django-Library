from django.contrib import admin
from .models import Book, Checkout, Comment
# Register your models here.


class BookAdmin(admin.ModelAdmin):

    model = Book
    readonly_fields = ('date_created', 'date_updated')
    ordering = ('title',)
    list_display = ('title', 'author', 'owner', 'location', 'status', 'date_created', 'date_updated')

admin.site.register(Book, BookAdmin)


class CheckoutAdmin(admin.ModelAdmin):

    model = Checkout
    readonly_fields = ('checked_out_date', 'returned_date')
    ordering = ('book',)
    list_display = ('book', 'checked_out_by', 'checked_out_date', 'returned_date')

admin.site.register(Checkout, CheckoutAdmin)


class CommentAdmin(admin.ModelAdmin):

    model = Comment
    ordering = ('date_created',)
    list_display = ('user', 'book', 'message', 'is_deleted', 'date_created', 'date_updated')

admin.site.register(Comment, CommentAdmin)