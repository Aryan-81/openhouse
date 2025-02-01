from rest_framework import serializers
from .models import Email_Counter

class MailCounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email_Counter
        fields = ['count']
