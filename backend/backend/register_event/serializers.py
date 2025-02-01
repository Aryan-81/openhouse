from rest_framework import serializers
from .models import RegisterEvent

class RegisterEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterEvent
        fields = ['RegisterEvent_id', 'REvent', 'RSchool', 'RStudent_Num']
    
    def create(self, validated_data):
        # Custom create method (if you want to do any custom logic during creation)
        # You can keep this method as is or add extra processing.
        return RegisterEvent.objects.create(**validated_data)

    def update(self, instance, validated_data):
        # Custom update method (if you want to do any custom logic during update)
        instance.REvent = validated_data.get('REvent', instance.REvent)
        instance.RSchool = validated_data.get('RSchool', instance.RSchool)
        instance.RStudent_Num = validated_data.get('RStudent_Num', instance.RStudent_Num)
        instance.save()
        return instance
