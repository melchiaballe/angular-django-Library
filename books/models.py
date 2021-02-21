from django.db import models
from users.models import User


class Book(models.Model):
    AVAILABLE = 'available'
    CHECKED_OUT = 'checked out'
    DAMAGED = 'damaged'
    LOST = 'lost'

    STATUS_CHOICES = (
        (AVAILABLE, 'Available'),
        (CHECKED_OUT, 'Checked Out'),
        (DAMAGED, 'Damaged'),
        (LOST, 'Lost'),
    )
    title = models.CharField(max_length=255, blank=True)
    author = models.CharField(max_length=255, blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=255, blank=True)
    is_digital_copy = models.BooleanField(default=False)
    status = models.CharField(default=AVAILABLE, max_length=255, choices=STATUS_CHOICES)

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('title', 'author', 'owner', 'is_digital_copy'),

    def __str__(self):
        return "{}".format(self.title)


class Checkout(models.Model):

    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    checked_out_by = models.ForeignKey(User, on_delete=models.CASCADE)
    checked_out_date = models.DateTimeField(auto_now_add=True)
    returned_date = models.DateTimeField(blank=True, null=True)


class Comment(models.Model):

    message = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    is_deleted = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
