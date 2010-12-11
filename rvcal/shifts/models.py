from django.db import models

class Shift(models.Model):
  person = models.CharField(max_length=255)
  date = models.DateField('Shift date')
