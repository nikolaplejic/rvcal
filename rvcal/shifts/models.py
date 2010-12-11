from django.db import models
from django.contrib.auth.models import User

class Shift(models.Model):
  person = models.ForeignKey(User, related_name="shift_user")
  comment = models.CharField(max_length=255, blank=True)
  date = models.DateField('Shift date')

  def __unicode__(self):
    return self.person.username + " - " + self.date.isoformat()
