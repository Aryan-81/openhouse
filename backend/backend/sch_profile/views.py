from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from authentication.permissions import IsSchool,IsAdmin
from rest_framework.response import Response
from rest_framework import status
from .models import Sch_profile
from .serializers import Sch_profileSerializer
# Create your views here.

#School view
#view of EvaluatorProfile
class SchProfile(APIView):
    permission_classes=[IsAuthenticated,IsSchool]
    def get(self, request):
        try:
            # Fetch the Evaluator profile for the logged-in user
            sch_profile, created = Sch_profile.objects.get_or_create(School_id=request.user)
            # Serialize the data
            serializer = Sch_profileSerializer(sch_profile)
            # Return the serialized data
            return Response({'profile': serializer.data})
        except:
            print(request.user)
            return Response({'msg': 'fail to fetch'})

    def post(self, request):
        try:
            # Check if the profile already exists
            user_profile = Sch_profile.objects.get(School_id=request.user)
            # Partial update (using data passed in the request)
            stat = request.data.get('status')
        
            # If status is 1, handle the logic accordingly
            if stat != str(1):
                # Logic when status is 1
                return Response({'error': 'Status should be 1 when creating or updating profile'}, status=status.HTTP_400_BAD_REQUEST)
            
            serializer = Sch_profileSerializer(user_profile, data=request.data, partial=True)
        except Sch_profile.DoesNotExist:
            # Create a new profile if it doesn't exist
            serializer = Sch_profileSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(User=request.user)  # Associate the profile with the logged-in user
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        if serializer.is_valid():
            # Save the updated profile
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request):
        try:
            # Fetch the School profile for the logged-in user
            sch_profile = Sch_profile.objects.get(School_id=request.user)
            sch_profile.delete()  # Delete the profile
            return Response({'msg': 'Profile deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except Sch_profile.DoesNotExist:
            return Response({'msg': 'Profile not found'}, status=status.HTTP_404_NOT_FOUND)

#Admin School View

class AdminSchoolProfile(APIView):
    permission_classes = [IsAuthenticated, IsAdmin]

    def get(self, request):
        try:
            # Fetch all school profiles
            sch_profiles = Sch_profile.objects.all()

            # Serialize the profiles
            serializer = Sch_profileSerializer(sch_profiles, many=True)

            # Return the serialized data for all profiles
            return Response({'profiles': serializer.data})

        except Exception as e:
            # Catch any error that might occur
            return Response({'msg': f'Fail to fetch: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

    
        
        
        
class Admin_Sch_Prof_Spef(APIView):
    permission_classes=[IsAuthenticated,IsAdmin]
    def get(self, request):
        try:
            # Get the school_id (sch_id) from the request data
            school_id = request.data.get('sch_id')

            if not school_id:
                return Response({'msg': 'sch_id is required'}, status=status.HTTP_400_BAD_REQUEST)

            # Fetch the School profile for the given sch_id
            sch_profile = Sch_profile.objects.get(School_id=school_id)
            
            # Serialize the data
            serializer = Sch_profileSerializer(sch_profile)
            
            # Return the serialized data
            return Response({'profile': serializer.data})

        except Sch_profile.DoesNotExist:
            return Response({'msg': 'Profile not found for the given sch_id'}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({'msg': f'Failed to fetch: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        try:
            # Get the school_id (sch_id) from the request data
            sch_id = request.data.get('sch_id')

            if not sch_id:
                return Response({'msg': 'sch_id is required'}, status=status.HTTP_400_BAD_REQUEST)

            # Fetch the School profile for the given sch_id
            user_profile = Sch_profile.objects.get(School_id=sch_id)
        
        
            # Partial update (using data passed in the request)
            serializer = Sch_profileSerializer(user_profile, data=request.data, partial=True)
            
        except Sch_profile.DoesNotExist:
            # If the profile doesn't exist, create a new one
            serializer = Sch_profileSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(School_id=sch_id)  # Associate the profile with the given sch_id
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        if serializer.is_valid():
            # Save the updated profile
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
    def delete(self, request):
        try:
            # Get the school_id (sch_id) from the request data
            sch_id = request.data.get('sch_id')
            if not sch_id:
                return Response({'msg': 'sch_id is required'}, status=status.HTTP_400_BAD_REQUEST)

            # Fetch the School profile for the given sch_id
            sch_profile = Sch_profile.objects.get(School_id=sch_id)
            sch_profile.delete()  # Delete the profile
            return Response({'msg': 'Profile deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

        except Sch_profile.DoesNotExist:
            return Response({'msg': 'Profile not found'}, status=status.HTTP_404_NOT_FOUND)

        
        
        
        
