import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from cart.models import Brand
from cart.serializers import BrandSerializer


@csrf_exempt
def brand_list(request, categories):
    if request.method == 'GET':
        categories = Brand.objects.all()
        serializer = BrandSerializer(categories, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        request_body = json.loads(request.body)

        serializer = BrandSerializer(data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})


def brand_products(request, category_id):
    try:
        brand = Brand.objects.get(id=category_id)
    except Brand.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    products = brand.product_set.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

