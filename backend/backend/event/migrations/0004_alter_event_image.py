# Generated by Django 4.2.18 on 2025-02-04 17:40

from django.db import migrations, models
import event.models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0003_event_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=event.models.PathAndRename('school_images/')),
        ),
    ]
