# A Simple User Registration & Login N.b.(Insecure)

from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import connection
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if User.objects.filter(username=username).exists():
        return Response({'error': 'User already exists'}, status=status.HTTP_400_BAD_REQUEST)
    
    # .....................No password validation (intentional vulnerability)............
    user = User.objects.create_user(username=username, password=password)
    return Response({'message': 'User registered successfully'})

@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)
    if user:
        # ..................No token/session implemented (intentional)..........................
        return Response({'message': 'Login successful'})
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@permission_classes([])  # No auth required for demo (vulnerability)
def submit_sensitive_data(request):
    full_name = request.data.get('full_name')
    email = request.data.get('email')
    id_number = request.data.get('id_number')

    # ----------Intentional raw SQL query - vulnerable to SQL Injection!-------------
    with connection.cursor() as cursor:
        sql = f"INSERT INTO api_sensitivedata (full_name, email, id_number) VALUES ('{full_name}', '{email}', '{id_number}')"
        cursor.execute(sql)

    return Response({'message': 'Data submitted successfully'})