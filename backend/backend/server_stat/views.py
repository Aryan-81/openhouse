from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Email_Counter
from .serializers import MailCounterSerializer

def increment_mail_counter():
    counter, created = Email_Counter.objects.get_or_create(id=1)
    counter.increment()


class MailCounterView(APIView):
    def get(self, request):
        counter, created = Email_Counter.objects.get_or_create(id=1)
        serializer = MailCounterSerializer(counter)
        return Response(serializer.data)
