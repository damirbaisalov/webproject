from django.shortcuts import render

# Create your views here.

from django.http.request import HttpRequest
from django.http.response import HttpResponse, JsonResponse
from api.models import Category, Product
from django.http import Http404
from django.db.models import Count

def categories_list(request):
	if request.method == "GET":
		categories = Category.objects.all()
		categories_json = [category.to_json() for category in categories]
		return JsonResponse(categories_json, safe=False)

def categories_detail(request, category_id):
	if request.method == "GET":
		try:
			category = Category.objects.get(id=category_id)
		except Category.DoesNotExist as e:
			return JsonResponse({'error': 'category does not exist'})

		return JsonResponse(category.to_json())

def categories_by_company(request, category_id):
	if request.method == "GET":
		try:
			category = Category.objects.get(id=category_id)
		except Category.DoesNotExist as e:
			return JsonResponse({'error': 'does not exist'})

		products = category.product_set.all();
		products_json = [product.to_json() for product in products]
		return JsonResponse(products_json, safe=False)

def products_list(request):
	if request.method == "GET":
		products = Product.objects.all()
		products_json = [Product.to_json() for product in products]
		return JsonResponse(products_json, safe=False)

def products_detail(request, product_id):
	if request.method == "GET":
		try:
			product = Product.objects.get(id=product_id)
		except Product.DoesNotExist as e:
			return JsonResponse({'error': 'does not exist'})
		return JsonResponse(product.to_json())
