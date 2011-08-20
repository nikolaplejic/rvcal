from django.conf.urls.defaults import *

urlpatterns = patterns('shifts.views',
  (r'index/', 'index'), 
  (r'events/', 'events'), 
  (r'login/', 'user_login'), 
)
