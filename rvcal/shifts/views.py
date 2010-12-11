from django.http import HttpResponse
from django.shortcuts import render_to_response

def index(request):
  template = 'index.html'
  context = {}
  return render_to_response(template, context)
