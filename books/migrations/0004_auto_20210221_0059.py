# Generated by Django 3.1.6 on 2021-02-20 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0003_auto_20210220_2251'),
    ]

    operations = [
        migrations.AlterField(
            model_name='checkout',
            name='returned_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
