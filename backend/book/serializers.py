from rest_framework import serializers
from book.models import Room

class RoomSerializers(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'