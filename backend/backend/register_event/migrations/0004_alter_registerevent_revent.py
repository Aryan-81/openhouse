# Generated by Django 5.1.1 on 2025-02-01 01:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0002_event_category'),
        ('register_event', '0003_remove_registerevent_revent_registerevent_revent'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registerevent',
            name='REvent',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.event'),
        ),
    ]
