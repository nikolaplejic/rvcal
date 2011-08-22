# -*- coding: utf-8 -*- 

from django import forms
from django.contrib.auth.models import User

class ShiftForm(forms.Form):
  person = forms.ModelChoiceField(queryset=User.objects.all(), 
                                 label='Haker(ica)', 
                                 empty_label=None)
  date = forms.CharField(label='Datum',
                         widget=forms.TextInput(attrs={ 'readonly': 'readonly' }))
  clear = forms.BooleanField(label='Obriši do sada unesena dežurstva za ovaj dan', required=False)

class LoginForm(forms.Form):
  username = forms.CharField(label='Username', widget=forms.TextInput(attrs={}))
  password = forms.CharField(label='Password', widget=forms.PasswordInput(attrs={}))
