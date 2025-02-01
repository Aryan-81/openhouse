from rest_framework import serializers
from .models import Sch_profile

# Profile of Evaluator
class Sch_profileSerializer(serializers.Serializer):
    School_Name = serializers.CharField(max_length=50,required=True)
    School_Address = serializers.CharField(max_length=50,required=True)
    School_District = serializers.CharField(max_length=50,required=True)
    School_State = serializers.CharField(max_length=50,required=True)
    School_Zipcode = serializers.CharField(max_length=6,required=True)
    School_Affiliation_number = serializers.CharField(max_length=50,required=True)
    School_Phone_number = serializers.CharField(max_length=50,required=True)
    School_Landline_number = serializers.CharField(max_length=50,required=True)
    # School_Email = School_id.email
    School_IsPublic= serializers.CharField(max_length=10,required=True)
    School_IsAtl = serializers.CharField(max_length=10,required=True)
    School_IsPmshri= serializers.CharField(max_length=10,required=True)
    School_IsTinkering= serializers.CharField(max_length=10,required=True)
    School_IsPreviousEng= serializers.CharField(max_length=10,required=True)
    status = serializers.IntegerField(required=True)
    
    def create(self, validated_data):
        # Handle the creation of a new Evaluator instance
        return Sch_profile.objects.create(**validated_data)
    

    def update(self, instance, validated_data):
        # Update fields based on the validated data
        instance.School_Name = validated_data.get('School_Name', instance.School_Name)
        instance.School_Address = validated_data.get('School_Address', instance.School_Address)
        instance.School_District = validated_data.get('School_District', instance.School_District)
        instance.School_State = validated_data.get('School_State', instance.School_State)
        instance.School_Zipcode = validated_data.get('School_Zipcode', instance.School_Zipcode)
        instance.School_Affiliation_number = validated_data.get('School_Affiliation_number', instance.School_Affiliation_number)
        instance.School_Phone_number = validated_data.get('School_Phone_number', instance.School_Phone_number)
        instance.School_Landline_number = validated_data.get('School_Landline_number', instance.School_Landline_number)
        instance.School_IsPublic = validated_data.get('School_IsPublic', instance.School_IsPublic)
        instance.School_IsAtl = validated_data.get('School_IsAtl', instance.School_IsAtl)
        instance.School_IsPmshri = validated_data.get('School_IsPmshri', instance.School_IsPmshri)
        instance.School_IsTinkering = validated_data.get('School_IsTinkering', instance.School_IsTinkering)
        instance.School_IsPreviousEng = validated_data.get('School_IsPreviousEng', instance.School_IsPreviousEng)
        instance.status = validated_data.get('status', instance.status)

        # Save the updated instance
        instance.save()
        return instance