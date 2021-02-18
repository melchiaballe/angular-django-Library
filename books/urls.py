  
from django.urls import path, re_path
from .models import Book, Checkout, Comment
from .api import BookViewSet
urlpatterns = [
    path('', BookViewSet.as_view({
        'get': 'filter',
    }), name="payroll-list"),
    
]