from django.db import models

class Reservations(models.Model):
    """
        schema database
    """
    created_at = models.DateField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    name = models.CharField(max_length=100, null=True)
    title = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=100, null=True)
    time = models.CharField(max_length=100, null=True)
    description = models.CharField(max_length=100, null=True)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.name
