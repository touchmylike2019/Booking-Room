from django.db import models
# from django.contrib.auth.models import User

# Create your models here.
# class Book(models.Model):
#     """
#         schema daatabase
#     """
#     def __str__(self):
#         return ''

class Room(models.Model):
    """
        schema database
    """
    created_at = models.DateField(auto_now_add=True, auto_now=False)
    updated_at = models.DateTimeField(auto_now_add=False, auto_now=True)
    name = models.CharField(max_length=100, null=True)
    description = models.CharField(max_length=100, null=True)
    location = models.CharField(max_length=100, null=True)
    size = models.CharField(max_length=20, null=True)
    amount = models.IntegerField(null=True)
    status = models.BooleanField(default=False)
    # owner = models.ForeignKey(User, related_name="book", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
