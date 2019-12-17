from reservations.models import Reservations
from rest_framework import viewsets, permissions
from .serializers import ReservationsSerializers


class ReservationsViewSet(viewsets.ModelViewSet):
    queryset = Reservations.objects.all()
    """show model to json"""
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = ReservationsSerializers
