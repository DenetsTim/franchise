from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    creation_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
