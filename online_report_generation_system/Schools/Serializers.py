from rest_framework import serializers

from .models import (
    School,
    Student,
    Assessment,
    Report_Card
)

class School_serializer(serializers.ModelSerializer):
    class Meta :
        model = School
        fields = '__all__'
    def create(self , validated_data):
        new_school = School(**validated_data)
        new_school.save()
        return new_school
    def update(self,instance , validated_data):
        instance.Name = validated_data.get('Name' , instance.Name)
        instance.Passcode = validated_data.get('Passcode' , instance.Passcode)
        instance.Email = validated_data.get('Email' , instance.Email)
        instance.save()
        return instance

class Assessment_serializer(serializers.ModelSerializer):
    class Meta:
        model = Assessment
        exclude = ['Report_cards' , 'Extra_files']
    def create(self , validated_data):
        new_assessment = Assessment(**validated_data)
        new_assessment.save()
        return new_assessment
    def update(self,instance,validated_data):
        instance.School = validated_data.get('School' , instance.School)
        instance.Name = validated_data.get('Name' , instance.Name)
        instance.Extra_information = validated_data.get('Extra_information' , instance.Extra_information)
        instance.Class = validated_data.get('Class' , instance.Class)
        instance.save()
        return instance

class Report_Card_serializer(serializers.ModelSerializer):
    class Meta:
        model = Report_Card
        fields = '__all__'
    def create(self , validated_data):
        new_report_card = Report_Card(**validated_data)
        new_report_card.save()
        return new_report_card
    def update(self , instance , validated_data):
        instance.File = validated_data.get('File' , instance.File)
        instance.save()
        return instance

class Student_serializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        exclude = ['Report_cards']
    def create(self , validate_data):
        new_student = Student(**validate_data)
        new_student.save()
        return new_student
    def update(self , instance , validated_data):
        instance.School = validated_data.get('School' , instance.School)
        instance.Name = validated_data.get('Name' , instance.Name)
        instance.Pay_code = validated_data.get('Pay_code' , instance.Pay_code)
        instance.save()
        return instance
