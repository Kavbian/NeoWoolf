from django.urls import path

from Shop.views import index, item_list_view, item_detail_view, military_view

urlpatterns = [
    path("", index, name="index"),
    path("items/", item_list_view, name="item-list"),
    path("items/<int:pk>/", item_detail_view, name="item-detail"),
    path("military/", military_view, name="military"),
]

app_name = "shop"
