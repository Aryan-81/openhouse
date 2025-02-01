from django.urls import path
from .views import MailCounterView

urlpatterns = [
    path('mail-counter/', MailCounterView.as_view(), name='mail-counter'),
]
