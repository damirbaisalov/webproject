import json
from django.http.response import JsonResponse
from main.models import Category
from django.views.decorators.csrf import csrf_exempt
from api.models import Category
from api.serializers import CategorySerializer

@csrf_exempt
def category_list(request, categories):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        request_body = json.loads(request.body)

        serializer = CategorySerializer(data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})


@csrf_exempt
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        serializer = CategorySerializer(category)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        request_body = json.loads(request.body)
    elif request.method == 'DELETE':
        pass


def category_products(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    products = category.product_set.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

