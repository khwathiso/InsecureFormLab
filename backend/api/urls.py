from django.urls import path
from .views import register, user_login, submit_sensitive_data

urlpatterns = [
    path('register/', register),
    path('login/', user_login),
    path('submit/', submit_sensitive_data),
]
