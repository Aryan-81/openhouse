from django.urls import path
from .views import SchProfile,AdminSchoolProfile,Admin_Sch_Prof_Spef
urlpatterns = [
    path('sch_profile', SchProfile.as_view(), name='sch_profile'),
    path('admin_all', AdminSchoolProfile.as_view(), name='admin_all'),
    path('admin_spec', Admin_Sch_Prof_Spef.as_view(), name='admin_spec'),
    
    
]