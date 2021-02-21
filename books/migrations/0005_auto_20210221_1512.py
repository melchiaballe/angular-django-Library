# Generated by Django 3.1.6 on 2021-02-21 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0004_auto_20210221_0059'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='is_digital_copy',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='book',
            name='status',
            field=models.CharField(choices=[('available', 'Available'), ('checked out', 'Checked Out'), ('damaged', 'Damaged'), ('lost', 'Lost')], default='available', max_length=255),
        ),
    ]