"""online_report_generation_system URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Schools.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('create-user' , create_school , name = "Create School User" ),
    path('Sign_in/' , sign_in , name = 'Sign in'),
    path('Create_assessment' , create_assessment , name='Create assessment'),
    path('Upload_reports' , update_assessment , name = 'upload reports'),
    
]
