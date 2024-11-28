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


def item_detail_view(request, pk):
    item = Item.objects.get(id=pk)

    other_items = Item.objects.all()[:4]

    context = {
        "item": item,
        "other_items": other_items,
    }

    return render(request, "shop/item_detail.html", context)

def military_view(request: HttpRequest) -> HttpResponse:
    return render(request, "shop/military.html")
