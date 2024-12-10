from django.urls import path
from .views import VideoPrediction

urlpatterns = [
    path('predict/', VideoPrediction.as_view(), name='video-prediction'),
]
