from django.contrib import admin
from django.urls import path,include
from .views import EventHeadView

urlpatterns = [
    path('EventHeadView/', EventHeadView.as_view(), name='EventHeadView'),
    ]