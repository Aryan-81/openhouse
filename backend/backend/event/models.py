from django.db import models
from backend import settings
import os
from django.utils.deconstruct import deconstructible

@deconstructible
class PathAndRename:
    def __init__(self, sub_path):
        self.path = sub_path

    def __call__(self, instance, filename):
        ext = filename.split('.')[-1]
        # Get the last event with an image to determine the next counter
        last_event = Event.objects.exclude(image='').order_by('-Event_id').first()
        if last_event and last_event.image:
            last_image_name = os.path.basename(last_event.image.name)
            last_counter = int(last_image_name.split('_')[-1].split('.')[0])
            next_counter = last_counter + 1
        else:
            next_counter = 1

        # Set the new filename
        filename = f'{instance.Event_id}_image_{next_counter}.{ext}'
        return os.path.join(self.path, filename)

#  models start here.

#profile of Evaluator
class Event(models.Model):
  Event_id= models.CharField(max_length=4, primary_key=True)
  Event_Name = models.CharField(max_length=50,blank=True)
  Event_des_short = models.CharField(max_length=200,blank=True)
  Event_des_long = models.CharField(max_length=1000,blank=True)
  Event_Head = models.CharField(max_length=50,blank=True)
  Event_Team = models.CharField(max_length=2000,blank=True)
  Contact_Phone_number1 = models.CharField(max_length=50,blank=True)
  Contact_Email1 = models.CharField(max_length=50,blank=True)
  Contact_Phone_number2 = models.CharField(max_length=50,blank=True)
  Contact_Email2 = models.CharField(max_length=50,blank=True)
  Pre_Registered = models.BooleanField(default=False, blank=False)
  Number_Registered = models.IntegerField(default=0, blank=False)
  Space_Location = models.CharField(max_length=10,blank=True)
  Category=models.CharField(max_length=10,blank=True)
  image = models.ImageField(upload_to=PathAndRename('school_images/'), blank=True, null=True)
#   photo = models.CharField(max_length=200,blank=False, placeholder = '/photo.jpg')

  def __str__(self):
        return f'{self.Event_Name}'

  def generate_event_id(self):
      """Generate Event_id in a sequential format (e.g., 'E001', 'E002')"""
      last_event = Event.objects.all().order_by('-Event_id').first()  # Get the last event by Event_id
      if last_event:
          last_event_number = int(last_event.Event_id[1:])  # Extract number from last event ID (assuming format E001, E002, ...)
          next_event_number = last_event_number + 1
      else:
          next_event_number = 1  # Start from 1 if no events exist

      return f'E{next_event_number:03d}'  # Format the ID as 'E001', 'E002', etc.

  def save(self, *args, **kwargs):
      if not self.Event_id:  # Only generate an Event_id if it's not already set
          self.Event_id = self.generate_event_id()
      super().save(*args, **kwargs)  # Call the parent save method