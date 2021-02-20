  
from django.urls import path, re_path
from .models import Book, Checkout, Comment
from .api import BookViewSet, CheckoutViewSet
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
    }), name='checkout_book')
]