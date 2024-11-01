from django.contrib.auth.models import User
from django.db import models


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default="Logo-pink.png", blank=True)

    def __str__(self):
        return self.user.username


class Item(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.TextField()
    image = models.ImageField(default="Logo-pink.png", blank=True)

    def __str__(self):
        return self.name