from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from authentication.permissions import IsEvent_head ,IsAdmin # Adjust the permissions accordingly
from rest_framework.response import Response
from rest_framework import status
from .models import Event
from .serializers import EventSerializer

# Create your views here.

# View for Event
class EventView(APIView):
    permission_classes = [IsAuthenticated, IsEvent_head]  # Permissions for the event head
     
    def get(self, request):
        event_id = request.data.get('Event_id')# Retrieve event_id from query params
        
        if event_id:
            try:
                # Fetch the event using the event_id from query parameters
                event = Event.objects.get(Event_id=event_id)
                serializer = EventSerializer(event)
                return Response({'event': serializer.data})
            except Event.DoesNotExist:
                return Response({'msg': 'Event not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            # Return all events if no event_id is provided
            
            return Response({'msg': "error"})
    def post(self, request):
        # Create a new event
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Save the new event
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#Admin for all object 
class AdminEvent(APIView):
    permission_classes = [IsAuthenticated, IsAdmin]  # Only accessible by admin users

    def get(self, request):
        try:
            # Fetch all events
            events = Event.objects.all()

            # Serialize the events
            serializer = EventSerializer(events, many=True)

            # Return the serialized data for all events
            return Response({'events': serializer.data})

        except Exception as e:
            # Catch any error that might occur
            return Response({'msg': f'Failed to fetch: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

    
#Admin for specific event
class Admin_Event_Spec(APIView):
    permission_classes = [IsAuthenticated, IsAdmin]  # Only accessible by admin users

    def get(self, request):
        try:
            # Get the Event_id from the request data
            event_id = request.data.get('Event_id')

            if not event_id:
                return Response({'msg': 'Event_id is required'}, status=status.HTTP_400_BAD_REQUEST)

            # Fetch the Event for the given Event_id
            event = Event.objects.get(Event_id=event_id)
            
            # Serialize the data
            serializer = EventSerializer(event)
            
            # Return the serialized data
            return Response({'event': serializer.data})

        except Event.DoesNotExist:
            return Response({'msg': 'Event not found for the given Event_id'}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({'msg': f'Failed to fetch: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        try:
            # Get the Event_id from the request data
            event_id = request.data.get('Event_id')

            if event_id:
                try:
                    # If Event_id is provided, fetch the event and partially update it
                    event = Event.objects.get(Event_id=event_id)
                    serializer = EventSerializer(event, data=request.data, partial=True)  # Partial update
                    if serializer.is_valid():
                        serializer.save()  # Save the updated event
                        return Response(serializer.data, status=status.HTTP_200_OK)
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                except Event.DoesNotExist:
                    return Response({'msg': 'Event not found for the provided Event_id'}, status=status.HTTP_404_NOT_FOUND)
            else:
                # If Event_id is not provided, create a new event
                serializer = EventSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()  # Save the new event
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response({'msg': f'Failed to create or update event: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        try:
            # Get the Event_id from the request data
            event_id = request.data.get('Event_id')

            if not event_id:
                return Response({'msg': 'Event_id is required'}, status=status.HTTP_400_BAD_REQUEST)

            # Fetch the Event for the given Event_id
            event = Event.objects.get(Event_id=event_id)
            event.delete()  # Delete the event
            return Response({'msg': 'Event deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

        except Event.DoesNotExist:
            return Response({'msg': 'Event not found for the provided Event_id'}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({'msg': f'Failed to delete event: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)