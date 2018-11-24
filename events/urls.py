from django.urls import path
from . import views


urlpatterns = [
    path('create', views.Create.as_view(), name='create'),
    path('delete', views.Delete.as_view(), name='delete')
]