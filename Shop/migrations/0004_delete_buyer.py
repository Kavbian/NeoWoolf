# Generated by Django 5.1.1 on 2024-09-25 22:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("Shop", "0003_alter_item_image_buyer"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Buyer",
        ),
    ]
