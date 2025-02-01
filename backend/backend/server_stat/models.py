from django.db import models


# Create your models here.

#profile of Evaluator
class Email_Counter(models.Model):
  count = models.IntegerField(default=0)
  
  def increment(self):
        self.count += 1
        self.save()
        
  def __str__(self):
    return f'{self.count}'
 