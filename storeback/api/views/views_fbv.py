import json
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status

from rest_framework.request import Request
from rest_framework.response import Response

from django.http.request import HttpRequest
from django.http.response import HttpResponse

from api.models import Category, Product
from api.serializers import CategorySerializer, ProductSerializer

@api_view(['GET', 'POST'])
def categories_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)

        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        request_body = json.loads(request.body)

        serializer = CategorySerializer(data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'error': serializer.error}, status=status.HTTP_201_CREATED)
        return JsonResponse({'error': serializer.errors},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET','PUT', 'DELETE'])
def categories_detail(request, category_id):
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


@api_view(['GET'])
def products_by_category(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
        serializer = CategorySerializer(category, many=True)
    except Category.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == "GET":
        products = category.product_set.all();
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def products_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)

        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        request_body = json.loads(request.body)

        serializer = ProductSerializer(data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
def products_detail(request, category_id):
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
