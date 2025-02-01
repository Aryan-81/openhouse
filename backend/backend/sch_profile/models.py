from django.db import models
from backend import settings

# Create your models here.

#profile of Evaluator
class Sch_profile(models.Model):
  School_id= models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,primary_key=True)
  School_Name = models.CharField(max_length=50,blank=True)
  School_Address = models.CharField(max_length=50,blank=True)
  School_District = models.CharField(max_length=50,blank=True)
  School_State = models.CharField(max_length=50,blank=True)
  School_Zipcode = models.CharField(max_length=6,blank=True)
  School_Affiliation_number = models.CharField(max_length=50,blank=True)
  School_Phone_number = models.CharField(max_length=50,blank=True)
  School_Landline_number = models.CharField(max_length=50,blank=True)
 # School_Email = School_id.email
  School_IsPublic= models.CharField(max_length=10,blank=True)
  School_IsAtl = models.CharField(max_length=10,blank=True)
  School_IsPmshri= models.CharField(max_length=10,blank=True)
  School_IsTinkering= models.CharField(max_length=10,blank=True)
  School_IsPreviousEng= models.CharField(max_length=10,blank=True)
  status = models.IntegerField(default=0,blank=False)

  
  
  def __str__(self):
    return f'{self.School_Name},{self.School_District}'
  def submit_profile(self):
        """Method to mark the profile as verified."""
        self.status = 1
        self.save()
  def verify_profile(self):
        """Method to mark the profile as verified."""
        self.status = 2
        self.save()
 