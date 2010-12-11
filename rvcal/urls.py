from django.conf.urls.defaults import *
from django.contrib import admin
from rvcal import settings

admin.autodiscover()

urlpatterns = patterns('',
    (r'^rvcal/', include('rvcal.shifts.urls')),
    (r'^admin/', include(admin.site.urls)),
)

if settings.DEBUG:
    urlpatterns += patterns(
        'django.views.static',
        (r'^%s(?P<path>.*)$' % settings.STATIC_URL[1:], 'serve',
         {'document_root':settings.STATIC_ROOT, 'show_indexes':True}),
            
        (r'^%s(?P<path>.*)$' % settings.MEDIA_URL[1:], 'serve',
         {'document_root':settings.MEDIA_ROOT, 'show_indexes':True}),
        )
