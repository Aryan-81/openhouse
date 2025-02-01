from django.db import models
from backend import settings
from event.models import Event
from sch_profile.models import Sch_profile

# Profile of Evaluator
class RegisterEvent(models.Model):
    RegisterEvent_id = models.CharField(max_length=10, primary_key=True)
    REvent=models.ForeignKey(Event,on_delete=models.CASCADE)
    RSchool=models.ForeignKey(Sch_profile,on_delete=models.CASCADE)
    RStudent_Num=models.IntegerField(default=0)
    
    class Meta:
        unique_together = ['REvent', 'RSchool']  # Ensures the combination is unique

    def __str__(self):
        return f'{self.RegisterEvent_id}'

    def generate_register_event_id(self):
        """Generate RegisterEvent_id in a sequential format (e.g., 'R001', 'R002')"""
        last_event = RegisterEvent.objects.all().order_by('-RegisterEvent_id').first()  # Get the last event by RegisterEvent_id
        if last_event:
            last_event_number = int(last_event.RegisterEvent_id[1:])  # Extract number from last event ID (assuming format R001, R002, ...)
            next_event_number = last_event_number + 1
        else:
            next_event_number = 1  # Start from 1 if no events exist

        return f'R{next_event_number:03d}'  # Format the ID as 'R001', 'R002', etc.

    def save(self, *args, **kwargs):
        if not self.RegisterEvent_id:  # Only generate a RegisterEvent_id if it's not already set
            self.RegisterEvent_id = self.generate_register_event_id()
        super().save(*args, **kwargs)  # Call the parent save method
