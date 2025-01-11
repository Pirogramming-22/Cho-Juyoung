from django.shortcuts import render, redirect
from .models import *

# Create your views here.
def reviews_list(request):
    reviews = Review.objects.all()
    context = {
        "reviews": reviews,
    }
    return render(request, "reviews_list.html", context)

def reviews_detail(request, pk):
    review = Review.objects.get(id=pk)
    context = {
        "review": review,
    }
    return render(request, "reviews_detail.html", context)

def reviews_create(request):
    if (request.method == "POST"):
        Review.objects.create(
            title = request.POST["title"],
            release_date = request.POST["release_date"],
            genre = request.POST["genre"],
            rating = request.POST["rating"],
            running_time = request.POST["running_time"],
            review = request.POST["review"],
            director = request.POST["director"],
            actors = request.POST["actors"],
        )
        return redirect("/reviews")
    return render(request, "reviews_create.html")

def reviews_delete(request, pk):
    if request.method == "POST":
        review = Review.objects.get(id=pk)
        review.delete()
    return redirect("/reviews")

def reviews_update(request, pk):
    review = Review.objects.get(id=pk)
    if request.method == "POST":
        review.title = request.POST["title"]
        review.release_date = request.POST["release_date"]
        review.genre = request.POST["genre"]
        review.rating = request.POST["rating"]
        review.running_time = request.POST["running_time"]
        review.review = request.POST["review"]
        review.director = request.POST["director"]
        review.actors = request.POST["actors"]
        review.save()
        return redirect(f"/reviews/reviews_detail/{pk}")
    
    context = {
        "review": review,
    }
    return render(request, "reviews_update.html", context)