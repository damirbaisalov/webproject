from django.urls import path
from cart.views import brand_list, brand_products

urlpatterns = [
    path('brands/', brand_list),
    path('brands/<int: product_id>', brand_products),
]