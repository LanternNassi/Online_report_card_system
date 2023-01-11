from django.db import models

# Create your models here.

class School(models.Model):
    Name = models.CharField(max_length = 300)
    Passcode = models.CharField(max_length = 300)
    Email = models.CharField(max_length=300)

class Report_Card(models.Model):
    File = models.FileField()

class Extra_file(models.Model):
    File = models.FileField()


class Student(models.Model):
    School = models.ForeignKey(School , on_delete = models.CASCADE)
    Name = models.CharField(max_length=300)
    Pay_code = models.CharField(max_length=300)
    Report_cards = models.ManyToManyField(Report_Card)

class Assessment(models.Model):
    School = models.ForeignKey(School , on_delete = models.CASCADE)
    Name = models.CharField(max_length = 300)
    Extra_information = models.CharField(max_length=300)
    Class = models.CharField(max_length=300)
    Report_cards = models.ManyToManyField(Report_Card)
    Extra_files = models.ManyToManyField(Extra_file)

class Specific_extra_file(models.Model):
    Student = models.ForeignKey(Student , on_delete = models.CASCADE)
    Assessment = models.ForeignKey(Assessment , on_delete = models.CASCADE)
    File = models.FileField()