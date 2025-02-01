from django.urls import path
from .views import RegisterEventList
urlpatterns = [
    path('RegisterEventList/', RegisterEventList.as_view(), name='RegisterEventList'),
   
]