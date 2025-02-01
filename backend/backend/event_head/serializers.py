from rest_framework import serializers
from .models import EventHead

class EventHeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventHead
        fields = ['EventHead_id', 'EventHead_Name', 'Event']
