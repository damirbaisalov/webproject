import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from main.models import Product


@csrf_exempt
def product_list(request, products):
    if request.method == 'GET':
        products = Product.objects.all()
        products_json = [product.to_json() for product in products]
        return JsonResponse(products_json, safe=False)
    elif request.method == 'POST':
        request_body = json.loads(request.body)
        return JsonResponse({'error': str(e)})

@csrf_exempt
def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        return JsonResponse(product.to_json())
    elif request.method == 'PUT':
        #update product object
        pass
    elif request.method == 'DELETE':
        pass

