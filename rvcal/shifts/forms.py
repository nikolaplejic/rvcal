from django import forms
from django.contrib.auth.models import User

class ShiftForm(forms.Form):
  person = forms.ModelChoiceField(queryset=User.objects.all(), 
                                 label='Haker(ica)', 
                                 empty_label=None)
  date = forms.DateField(label='Datum',
                         widget=forms.TextInput(attrs={ 'readonly': 'readonly' }))
