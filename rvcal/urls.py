from django.conf.urls.defaults import *
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    (r'^rvcal/', include('rvcal.shifts.urls')),
    (r'^admin/', include(admin.site.urls)),
)
