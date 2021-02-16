import os
import re
import json

import datetime
from datetime import datetime as dtime, timedelta

from PIL import Image
from io import BytesIO

from urllib.request import urlopen, Request
from urllib.parse import quote

from django.conf import settings
from django.core.files.base import ContentFile
from django.core.mail import EmailMessage
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, _get_queryset
from django.template.loader import get_template
from django.utils import timezone
from django.shortcuts import _get_queryset


class Query(object):
    """Query Helper for Model Serializers."""

    def __init__(self, *args, **kwargs):
        return super(Query, self).__init__(*args, **kwargs)

    @property
    def _model(self):
        try:
            return self.serializer_class.Meta.model
        except Exception as e:
            raise Exception("Model Serializer not found")

    def _get(self, _model, **kwargs):
        """ get an object based on the keyword arguments
            raise an HTTP404 if not found.
        """
        return get_object_or_404(_model, **kwargs)

    def _filter(self, _model, **kwargs):
        """ get the list of objects based on the
            keyword arguments.
        """
        return _model.objects.filter(**kwargs)


# class MailHelper(object):
#     """ Email helper."""

#     def send_payroll_email(self, receipent, pdf, pdf_details, subject="Payroll Report", 
#         message="Attached here is a copy of your payroll report"):
#         # Payroll report details
#         subject = subject
#         message = message
#         sender = settings.EMAIL_HOST
#         receipient = receipent

#         # Sending the actual email
#         email = EmailMessage(subject, message, sender, [receipent])
#         if isinstance(pdf, list):
#             for details, pdf_file in zip(pdf_details, pdf):
#                 email.attach(details.get("title"), pdf_file, 'application/pdf')
#         else:
#             email.attach(pdf_details.get('title'), pdf, 'application/pdf')

#         email.send()


class PermissionHelper(object):
    """Permissions Helper."""

    def check_get_query_result_if_exists(self, model, *args, **kwargs):
        """
            Checks if the query exists, return True if it exists, else false
        """
        # Allows dynamic get querysets
        queryset = _get_queryset(model)

        try:
            # Put the args and kwargs in the filter for filtering
            exists = queryset.get(*args, **kwargs)
            return True
        except queryset.model.DoesNotExist as e:
            # If queryset does not exist. Return False
            return False


class ImageDownload(object):
    """Image Downloader."""

    def __init__(self, *args, **kwargs):
        return super(ImageDownload, self).__init__(*args, **kwargs)

    def download(self, url):
        """Download from image source & locally save it."""
        req = self.request(url)
        inputfile, outputfile = BytesIO(urlopen(req).read()), BytesIO()

        img = Image.open(inputfile)
        img = img.convert("RGB") if img.mode != "RGB" else img
        img.thumbnail((192, 192), Image.ANTIALIAS)
        img.save(outputfile, "JPEG")

        self.image.save(os.path.basename(
            self._clean_url(url)),
            ContentFile(outputfile.getvalue()),
            save=False,
        )

    def request(self, url):
        return Request(url, headers={'User-Agent': 'Browser'})

    def _clean_url(self, url):
        proto, address = url.split("//")
        return f"{proto}//{quote(address)}"


class TZ(object):
    """Timezone Manager of Calculated Time and Date."""

    def __init__(self, *args, **kwargs):
        return super(TZ, self).__init__(*args, **kwargs)

    def get_server_time(self):
        """Global Server DateTime Configuration."""
        return dict(
            # current timezone aware date and time.
            datetime=timezone.now(),
            # current timezone
            tz=settings.TIME_ZONE
        )

    def last_n_months(self, month_num=1):
        """Get Month based on the Input."""
        return [
            timezone.now() - datetime.timedelta(days=month_num*30),
            timezone.now()
        ]

    def dt_range(self, start, interval=7):
        given_date = dtime.strptime(start, "%Y-%m-%d").date()
        # compute the start of the week value
        start_of_week = given_date - timedelta(days=given_date.weekday())
        #compute the end of the week value
        end_of_week = start_of_week + timedelta(days=interval)

        return start_of_week, end_of_week


def get_object_or_None(klass, *args, **kwargs):
    """
        Uses get() to return an object or None if the object does not exist.
        klass may be a Model, Manager, or QuerySet object. All other passed
        arguments and keyword arguments are used in the get() query.
        Note: Like with get(), a MultipleObjectsReturned will be raised if more than one
        object is found.
    """
    queryset = _get_queryset(klass)

    try:
        return queryset.get(*args, **kwargs)
    except queryset.model.DoesNotExist:
        return None
