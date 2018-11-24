from django.shortcuts import render
from django.views import View

from web.models import Event


class Index(View):
    def get(self, request):
        events = Event.objects.all()

        return render(request, 'index.html', {'events': events})
