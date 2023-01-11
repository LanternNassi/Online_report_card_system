from django.shortcuts import render
from rest_framework.decorators import api_view , permission_classes , authentication_classes
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.renderers import JSONRenderer , json
from rest_framework import status ,permissions ,viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication 
from rest_framework.permissions import IsAuthenticated , AllowAny
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from collections import namedtuple
import datetime
from django.utils import timezone

from .models import (
    School,
    Assessment
)

from .Serializers import (
    School_serializer,
    Assessment_serializer,
    Report_Card_serializer,
    Student_serializer

)

@api_view(['POST',])
@permission_classes([])
def create_school(request):
    print(request.data)
    serialized_new_school = School_serializer(data = {**request.data})
    if(serialized_new_school.is_valid()):
        print('here 2')
        new_school = serialized_new_school.create(serialized_new_school.validated_data)
        return Response(data = {'success' : 'true'} , status = status.HTTP_201_CREATED)
    else :
        return Response(data = {} , status = status.HTTP_304_NOT_MODIFIED)
        
@api_view(['POST' , 'GET'])
def sign_in(request):
    print(School.objects.all())
    passcode = request.data['Passcode']
    try:
        obj = School.objects.get(Passcode = passcode)
        serialized_school = School_serializer(obj)
        return Response( data= serialized_school.data , status = status.HTTP_200_OK)
    except:
        return Response(data = {'success' : 'false'} , status = status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
@permission_classes([])
def create_assessment(request):
    serialized_new_assessment = Assessment_serializer(data = {**request.data})
    if (serialized_new_assessment.is_valid()):
        new_assessment = serialized_new_assessment.create(serialized_new_assessment.validated_data)
        return Response(data = Assessment_serializer(new_assessment).data , status = status.HTTP_201_CREATED)
    else :
        return Response(data = serialized_new_assessment.error_messages , status = status.HTTP_205_RESET_CONTENT )

@api_view(['POST'])
@permission_classes([])
def update_assessment(request):
    reports = request.FILES
    print(reports)
    # print(reports['demo[]'])
    for i in reports:
        print(i)
    return Response(data = {'success' : 'true'} , status = status.HTTP_200_OK)





