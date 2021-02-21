from rest_framework import serializers
from django.utils.translation import ugettext_lazy as _

from .models import Book, Checkout, Comment
from users.serializers import ShortUserSerializer


class BookSerializer(serializers.ModelSerializer):

    owner = ShortUserSerializer(required=False, allow_null=True)

    class Meta:
        model=Book
        fields = ('id', 'title', 'author', 'location', 'owner', 'status', 'is_digital_copy')
    
    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop('request', None)
        return super(BookSerializer, self).__init__(*args, **kwargs)  

    def create(self, validated_data):
        book = Book(
                title=validated_data['title'],
                author=validated_data['author'],
                location=validated_data['location'],
                owner=self.request.user,
                is_digital_copy=validated_data['is_digital_copy'],
                status=validated_data['status'],
            )
        book.save()
    
    def update(self, instance, validated_data):
        title = validated_data.get('title', None)
        author = validated_data.get('author', None)
        location = validated_data.get('location', None)
        status = validated_data.get('status', None)

        if title is not None:
            instance.title = title
        
        if author is not None:
            instance.author = author

        if location is not None:
            instance.location = location

        if status is not None:
            instance.status = status

        instance.save()
        return instance

    def save(self, **kwargs):
        validated_data = dict(
            list(self.validated_data.items()) +
            list(kwargs.items())
        )

        if self.instance is not None:
            self.instance = self.update(self.instance, validated_data)
        else:
            self.instance = self.create(validated_data)
            
        return self.instance


class CheckoutSerializer(serializers.ModelSerializer):
    
    book = BookSerializer(required=False, allow_null=True)
    checked_out_by = ShortUserSerializer(required=False, allow_null=True)

    class Meta:
        model=Checkout
        fields = ('id', 'book', 'checked_out_by', 'checked_out_date', 'returned_date')
    
    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop('request', None)
        return super(CheckoutSerializer, self).__init__(*args, **kwargs)

    def create(self, validated_data):
        pass
    
    def update(self, instance, validated_data):
        pass

    def save(self, **kwargs):
        validated_data = dict(
            list(self.validated_data.items()) +
            list(kwargs.items())
        )

        if self.instance is not None:
            self.instance = self.update(self.instance, validated_data)
        else:
            self.instance = self.create(validated_data)
            
        return self.instance


class CommentSerializer(serializers.ModelSerializer):
    
    book = BookSerializer(required=False, allow_null=True)
    user = ShortUserSerializer(required=False, allow_null=True)

    class Meta:
        model=Comment
        fields = ('id', 'message', 'user', 'book', 'date_created', 'date_updated')
    
    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop('request', None)
        return super(CommentSerializer, self).__init__(*args, **kwargs)

    def create(self, validated_data):
        pass

    def save(self, **kwargs):
        validated_data = dict(
            list(self.validated_data.items()) +
            list(kwargs.items())
        )

        if self.instance is not None:
            self.instance = self.update(self.instance, validated_data)
        else:
            self.instance = self.create(validated_data)
            
        return self.instance