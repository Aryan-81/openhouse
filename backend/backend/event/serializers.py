from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.Serializer):
    Event_id = serializers.CharField(max_length=4, required=False)
    Event_Name = serializers.CharField(max_length=50, required=False)
    Event_des_short = serializers.CharField(max_length=200, required=False)
    Event_des_long = serializers.CharField(max_length=1000, required=False)
    Event_Head = serializers.CharField(max_length=50, required=False)
    Event_Team = serializers.CharField(max_length=2000, required=False)
    Contact_Phone_number1 = serializers.CharField(max_length=50, required=False)
    Contact_Email1 = serializers.CharField(max_length=50, required=False)
    Contact_Phone_number2 = serializers.CharField(max_length=50, required=False)
    Contact_Email2 = serializers.CharField(max_length=50, required=False)
    Pre_Registered = serializers.BooleanField(default=False)
    Number_Registered = serializers.IntegerField(default=0)
    Space_Location = serializers.CharField(max_length=10, required=False)
    Category=serializers.CharField(max_length=10,required=False)

    def create(self, validated_data):
        return Event.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.Event_Name = validated_data.get('Event_Name', instance.Event_Name)
        instance.Event_des_short = validated_data.get('Event_des_short', instance.Event_des_short)
        instance.Event_des_long = validated_data.get('Event_des_long', instance.Event_des_long)
        instance.Event_Head = validated_data.get('Event_Head', instance.Event_Head)
        instance.Event_Team = validated_data.get('Event_Team', instance.Event_Team)
        instance.Contact_Phone_number1 = validated_data.get('Contact_Phone_number1', instance.Contact_Phone_number1)
        instance.Contact_Email1 = validated_data.get('Contact_Email1', instance.Contact_Email1)
        instance.Contact_Phone_number2 = validated_data.get('Contact_Phone_number2', instance.Contact_Phone_number2)
        instance.Contact_Email2 = validated_data.get('Contact_Email2', instance.Contact_Email2)
        instance.Pre_Registered = validated_data.get('Pre_Registered', instance.Pre_Registered)
        instance.Number_Registered = validated_data.get('Number_Registered', instance.Number_Registered)
        instance.Space_Location = validated_data.get('Space_Location', instance.Space_Location)
        instance.Category = validated_data.get('Category', instance.Category)

        instance.save()
        return instance
