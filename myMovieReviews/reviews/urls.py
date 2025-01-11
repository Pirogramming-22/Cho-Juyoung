from django.urls import path
from .views import *

urlpatterns = [
    path("", reviews_list),
    path("reviews_detail/<int:pk>", reviews_detail),
    path("reviews_create", reviews_create),
    path("reviews_delete/<int:pk>", reviews_delete),
    path("reviews_update/<int:pk>", reviews_update),
]