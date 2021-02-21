  
from django.urls import path, re_path
from .models import Book, Checkout, Comment
from .api import (
    BookViewSet, 
    CheckoutViewSet,
    CommentViewSet
)


urlpatterns = [
    path('', BookViewSet.as_view({
        'get': 'filter',
    }), name="book-list"),

    path('owned-books/', BookViewSet.as_view({
        'get': 'owned_books',
    }), name="owned-book-list"),
    
    path('add-book/', BookViewSet.as_view({
        'post': 'add_book',
    }), name="add-book"),

    path('checkout-book/', CheckoutViewSet.as_view({
        'post': 'checkout_book'
    }), name='checkout_book'),

    path('comments/', CommentViewSet.as_view({
        'get': 'get_comments'
    }), name='comment_list'),

    path('add-comment/', CommentViewSet.as_view({
        'post': 'add_comment'
    }), name='add_comment'),

    path('delete-comment/', CommentViewSet.as_view({
        'post': 'delete_comment'
    }), name='delete_comment')
]