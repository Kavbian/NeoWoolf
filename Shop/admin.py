from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import UserProfile

from Shop.models import Item

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ["name", "price", ]
    list_filter = ["name", ]
    search_fields = ["name", ]


class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False
    verbose_name_plural = 'profile'


class UserAdmin(BaseUserAdmin):
    inlines = (UserProfileInline,)


admin.site.unregister(User)
admin.site.register(User, UserAdmin)
