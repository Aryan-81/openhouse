from django.urls import path
from .views import CreateOTPView
urlpatterns = [
    path('send/', CreateOTPView.as_view(), name='send-otp'),
    
]