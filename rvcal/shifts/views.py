from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.utils import simplejson
import datetime

def index(request):
  template = 'index.html'
  context = {}
  return render_to_response(template, context)

def events(request):
  today = datetime.datetime.now()
  events = [
    { 'title': 'Foo', 'start': today.isoformat() }
  ]
  return HttpResponse(simplejson.dumps(events), mimetype="text/plain")
