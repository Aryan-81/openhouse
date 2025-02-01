from django.db import models
from django.utils import timezone
from datetime import timedelta
# Create your models here.
class OTP(models.Model):
    email = models.EmailField()
    otp = models.CharField(max_length=6)
    def __str__(self):
        return self.otp