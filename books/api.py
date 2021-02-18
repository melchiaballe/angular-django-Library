  
from rest_framework import parsers, renderers
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet

from .models import Book, Checkout, Comment
from .serializers import BookSerializer

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
            instance=Book.objects.all(), 
            many=True,
        )

        return Response(serializer.data, status=200)