from django.db import models

# Create your models here.
class Review(models.Model):
    title = models.CharField(max_length=255)
    release_date = models.DateField()
    genre = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    running_time = models.IntegerField()
    review = models.TextField()
    director = models.CharField(max_length=255)
    actors = models.CharField(max_length=255)