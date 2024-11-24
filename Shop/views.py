from django.http import HttpRequest, HttpResponse
from django.shortcuts import render

from Shop.models import Item


def index(request: HttpRequest) -> HttpResponse:
    item_list = Item.objects.all()[:5]
    context = {'item_list': item_list}
    return render(request, "shop/index.html", context=context)


def item_list_view(request: HttpRequest) -> HttpResponse:
    item_list = Item.objects.all()
    context = {"item_list": item_list,
               "user": request.user, }
    return render(request, "shop/item_list.html", context=context)


def item_detail_view(request: HttpRequest, pk: int) -> HttpResponse:
    item = Item.objects.get(id=pk)
    context = {"item": item, }
    return render(request, "shop/item_detail.html", context=context)


def military_view(request: HttpRequest) -> HttpResponse:
    return render(request, "shop/military.html")
