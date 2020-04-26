from django.urls import path

from api.views import views_fbv, views_cbv , views_generic

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('categories/', views_generic.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/products/', views_generic.CategoryProductsAPIView.as_view()),
    path('products/', views_generic.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views_generic.ProductDetailAPIView.as_view()),

    path('cart/products/', views_fbv.products_cart),
    path('cart/products/<int:pk>/', views_cbv.ProductInCart.as_view()),
]
