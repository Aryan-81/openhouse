from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from authentication.permissions import IsEvent_head,IsAdmin
from rest_framework.response import Response
from rest_framework import status
from .models import EventHead
from .serializers import EventHeadSerializer

class EventHeadView(APIView):
    permission_classes = [IsAuthenticated,IsEvent_head]

    def get(self, request):
        try:
            # Get the school profile of the currently logged-in user
            EventHead_id = EventHead.objects.get(EventHead_id=request.user)
            # Serialize the data
            serializer = EventHeadSerializer(EventHead_id)
            return Response({'EventHead': serializer.data}, status=status.HTTP_200_OK)
        
        except EventHeadSerializer.DoesNotExist:
            return Response({'error': 'EventHead profile not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    