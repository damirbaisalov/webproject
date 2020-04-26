from django.urls import path

from api.views import views_fbv, views_cbv

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('categories/', views_cbv.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/products/', views_cbv.ProductsByCategoryAPIView.as_view()),
    path('products/', views_cbv.ProductsAPIView.as_view()),
    path('products/<int:product_id>/', views_cbv.ProductDetailAPIView.as_view())
]
