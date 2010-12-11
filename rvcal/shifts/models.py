from django.db import models
from django.contrib.auth.models import User

class Shift(models.Model):
  person = models.OneToOneField(User)
  comment = models.CharField(max_length=255, blank=True)
  date = models.DateField('Shift date')
