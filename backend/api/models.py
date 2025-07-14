from django.db import models

# My models

class SensitiveData(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    id_number = models.CharField(max_length=20)

    def __str__(self):
        return self.full_name
