from django.http import HttpResponse


class Index:
    def index(self):
        return HttpResponse('Hello World! My first django project :D')
