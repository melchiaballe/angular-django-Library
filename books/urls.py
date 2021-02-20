  
from django.urls import path, re_path
from .models import Book, Checkout, Comment
from .api import BookViewSet
urlpatterns = [
    path('', BookViewSet.as_view({
        'get': 'filter',
    }), name="book-list"),

    path('owned-books/', BookViewSet.as_view({
        'get': 'owned_books',
    }), name="owned-book-list"),
    
]