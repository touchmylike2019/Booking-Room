from book.models import Room
from rest_framework import viewsets, permissions
from .serializers import RoomSerializers


class RoomViewSet(viewsets.ModelViewSet):
    """show model to json"""
    queryset = Room.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RoomSerializers

    # def get_queryset(self):
    #     return self.request.user.book.all()

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)
