from djongo import models


class Event(models.Model):
    date = models.IntegerField()
    description = models.CharField(max_length=101)
    lang = models.CharField(max_length=2)
    granularity = models.CharField(max_length=11)
