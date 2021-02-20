  
from rest_framework import parsers, renderers
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

from .models import Book, Checkout, Comment
from .serializers import BookSerializer
from django.db.models import Q

class BookViewSet(ViewSet):
    """ book endpoints
    """
    serializer_class = BookSerializer
    permission_classes = (IsAuthenticated,)

    # def get(self, *args, **kwargs):
        # serializer = self.serializer_class(
        #     instance=self._get(self._model, **kwargs)
        # )
        # return Response(serializer.data, status=200)

    def filter(self, *args, **kwargs):
        # import pdb; pdb.set_trace()
        serializer = self.serializer_class(
            instance=Book.objects.filter(Q(status=Book.AVAILABLE) | Q(status=Book.CHECKED_OUT) | Q(status=Book.DIGITAL_COPY)), 
            many=True,
        )

        return Response(serializer.data, status=200)

    def owned_books(self, *args, **kwargs):
        # import pdb; pdb.set_trace()
        serializer = self.serializer_class(
            instance=Book.objects.filter(owner=self.request.user), 
            many=True,
        )
        return Response(serializer.data, status=200)

    def add_book(self, *args, **kwargs):
        serializer = self.serializer_class(
            data=self.request.data, request=self.request
        )
        print(serializer.is_valid())
        if serializer.is_valid(raise_exception=True):
            # serializer.object.owner = self.request.user 
            serializer.save() 
        return Response({}, status=200)