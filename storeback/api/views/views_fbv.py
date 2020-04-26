import json

from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from api.models import Category, Product, Cart, Brand
from api.serializers import CategorySerializer, ProductSerializer, BrandSerializer


@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
       categories = Category.objects.all()
       serializer = CategorySerializer(categories, many=True)

       return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'PUT', 'DELETE'])
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CategorySerializer(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        category.delete()

        return Response({'deleted': True})

@api_view(['GET', 'PUT', 'DELETE'])
def category_products(request, category_id):
    try:
        products = Product.objects.filter(category_id=category_id)
    except Product.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ProductSerializer(instance=products, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        products.delete()
        return Response({'deleted': True})

@api_view(['GET', 'POST'])
def product_list(request):
    if request.method == 'GET':
       products = Product.objects.all()
       serializer = ProductSerializer(products, many=True)

       return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ProductSerializer(instance=product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        product.delete()

        return Response({'deleted': True})
##################################################################
# @api_view(['GET'])
# def products_cart(request):
#     try:
#         cart = Cart.objects.get(id=1)
#     except Cart.DoesNotExist as e:
#         return Response({'error': str(e)})
#     if request.method == 'GET':
#         products = cart.product.all()
#         serializer = ProductSerializer(products, many=True)
#         return Response(serializer.data)

# @api_view(['GET', 'POST', 'DELETE'])
# def product_cart_2(request):
#     if request.method == 'GET':
#        products = Product.objects.all()
#        serializer = ProductSerializer(products, many=True)
#
#        return Response(serializer.data)
#
#     elif request.method == 'POST':
#         serializer = ProductSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response({'error': serializer.errors},
#                         status=status.HTTP_500_INTERNAL_SERVER_ERROR)
@api_view(['GET', 'POST'])
def brands_list(request):
    if request.method == 'GET':
        brands = Brand.objects.all()
        serializer = BrandSerializer(brands, many=True)

        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        request_body = json.loads(request.body)

        serializer = BrandSerializer(data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'error': serializer.error}, status=status.HTTP_201_CREATED)
        return JsonResponse({'error': serializer.errors},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET','PUT', 'DELETE'])
def brands_detail(request, brand_id):
    try:
        brand = Brand.objects.get(id=brand_id)
    except Brand.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = BrandSerializer(brand)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = BrandSerializer(instance=brand, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        brand.delete()

        return Response({'deleted': True})