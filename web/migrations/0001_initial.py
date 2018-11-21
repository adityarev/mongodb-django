# Generated by Django 2.1.3 on 2018-11-21 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.IntegerField()),
                ('description', models.CharField(max_length=101)),
                ('lang', models.CharField(max_length=2)),
                ('granularity', models.CharField(max_length=11)),
            ],
        ),
    ]