from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import RegisterEvent
from .serializers import RegisterEventSerializer
from sch_profile.models import Sch_profile
from event.models import Event
from rest_framework.permissions import IsAuthenticated
from authentication.permissions import IsSchool

class RegisterEventList(APIView):
    permission_classes = [IsAuthenticated,IsSchool]  # Ensure the user is authenticated

    def get(self, request):
        # Fetch the school profile associated with the logged-in user
        try:
            school_profile = Sch_profile.objects.get(School_id=request.user)  # Get the school profile of the logged-in user
        except Sch_profile.DoesNotExist:
            return Response({'error': 'School profile not found'}, status=status.HTTP_404_NOT_FOUND)

        # Fetch all RegisterEvent records associated with the school (RSCHOOL)
        events = RegisterEvent.objects.filter(RSchool=school_profile)  # Filter RegisterEvents for the logged-in school
        data = []

        for event in events:
            event_data = RegisterEventSerializer(event).data  # Serialize RegisterEvent data
            event_data['School_Name'] = event.RSchool.School_Name  # Add the school name to the event data
            data.append(event_data)

        return Response(data)

    def post(self, request):
        event_id = request.data.get('Event_id')
        student_num = request.data.get('RStudent_Num')

        if not event_id or student_num is None:
            return Response({'error': 'Event_id and RStudent_Num are required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            event = Event.objects.get(Event_id=event_id)
            school_profile = Sch_profile.objects.get(School_id=request.user)
        except (Event.DoesNotExist, Sch_profile.DoesNotExist) as e:
            return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)

        # Check if RegisterEvent already exists with the same Event and School
        if RegisterEvent.objects.filter(REvent=event, RSchool=school_profile).exists():
            return Response({'error': 'This combination of Event and School already exists'}, status=status.HTTP_400_BAD_REQUEST)

        register_event = RegisterEvent(
            REvent=event,
            RSchool=school_profile,
            RStudent_Num=student_num
        )

        register_event.save()
        serializer = RegisterEventSerializer(register_event)
        return Response(serializer.data, status=status.HTTP_201_CREATED)