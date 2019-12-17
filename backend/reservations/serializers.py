from rest_framework import serializers
from reservations.models import Reservations

class ReservationsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Reservations
        fields = '__all__'