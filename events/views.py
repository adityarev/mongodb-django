from django.http import HttpResponse
from django.shortcuts import redirect
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt

from web.models import Event


@method_decorator(csrf_exempt, 'dispatch')
class Create(View):
    def post(self, request):
        print(request.POST)
        if request.POST['id'] != 'new':
            Event.objects.select_for_update().filter(id=request.POST['id']).update(
                date=request.POST['date'],
                description=request.POST['description'],
                lang=request.POST['lang'],
                granularity=request.POST['granularity']
            )
        else:
            Event.objects.create(
                date=request.POST['date'],
                description=request.POST['description'],
                lang=request.POST['lang'],
                granularity=request.POST['granularity']
            )

        return redirect('index')


class Delete(View):
    def post(self, request):
        Event.objects.get(id=request.POST['id']).delete()

        return redirect('index')
