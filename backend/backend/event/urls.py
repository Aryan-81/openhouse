from django.urls import path
from .views import EventView,Admin_Event_Spec,AdminEvent
urlpatterns = [
    path('event', EventView.as_view(), name='sch_profile'),
    path('Admin_Event_Spec', Admin_Event_Spec.as_view(), name='Admin_Event_Spec'),
    path('AdminEvent', AdminEvent.as_view(), name='AdminEvent'),
    
    
]