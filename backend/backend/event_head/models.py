from django.db import models
from backend import settings
from event.models import Event

# Create your models here.

#profile of Evaluator
class EventHead(models.Model):
  EventHead_id= models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,primary_key=True)
  EventHead_Name = models.CharField(max_length=50,blank=True)
  Event=models.ForeignKey(Event,on_delete=models.CASCADE)

  def __str__(self):
        return f'{self.EventHead_Name}'