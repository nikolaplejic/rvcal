from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.shortcuts import render_to_response
from django.utils import simplejson
from django.core.serializers.json import DjangoJSONEncoder
from django.contrib.auth import authenticate, login, logout
from forms import ShiftForm
from models import Shift
from datetime import datetime

# user login
def user_login(request):
  context = {}
  if request.method == 'POST':
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username=username, password=password)
    if user is not None:
      if user.is_active:
        login(request, user)
        return HttpResponseRedirect(reverse(index))
      else:
        return HttpResponseRedirect(reverse(user_login))
    else:
      return HttpResponseRedirect(reverse(user_login))
  else:
    template = 'login.html'
    return render_to_response(template, context)

# serves main page with calendar
def index(request):
  if not request.user.is_authenticated():
    return HttpResponseRedirect(reverse(user_login))

  context = {}
  if request.method == 'POST':
    form = ShiftForm(request.POST)
    context['form'] = form
    if form.is_valid():
      shift = Shift(
        person=form.cleaned_data['person'],
        date=datetime.strptime(form.cleaned_data['date'], "%Y-%m-%d"))
      shift.save()
      return HttpResponseRedirect(
        reverse(index))
  else:
    form = ShiftForm()
    context['form'] = form

  template = 'index.html'
  return render_to_response(template, context)

# returns list of events for calendar
def events(request):
  events = []
  shifts = Shift.objects.all()
  for shift in shifts:
    events.append(
      { 'title': shift.person.username,
        'start': shift.date,
      })
  return HttpResponse(
    simplejson.dumps(events, cls=DjangoJSONEncoder),
    mimetype="text/plain")
