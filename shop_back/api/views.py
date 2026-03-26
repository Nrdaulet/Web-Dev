from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

def products_list(request):
    products = Product.objects.all()

    category = request.GET.get('category')
    if category:
        products = products.filter(category_id=category)

   
    active = request.GET.get('active')
    if active:
        if active.lower() == 'true':
            products = products.filter(is_active=True)
        elif active.lower() == 'false':
            products = products.filter(is_active=False)

    
    search = request.GET.get('search')
    if search:
        products = products.filter(name__icontains=search)


    sort = request.GET.get('sort')
    if sort == 'price':
        products = products.order_by('price')
    elif sort == '-price':
        products = products.order_by('-price')
    elif sort == 'name':
        products = products.order_by('name')


    return JsonResponse(list(products.values()), safe=False, json_dumps_params={'indent': 2})

def product_detail(request, id):
    product = Product.objects.filter(id=id).values().first()
    return JsonResponse(product, safe=False)


def categories_list(request):
    categories = Category.objects.all().values()
    return JsonResponse(list(categories), safe=False)


def category_detail(request, id):
    category = Category.objects.filter(id=id).values().first()
    return JsonResponse(category, safe=False)


def category_products(request, id):
    products = Product.objects.filter(category_id=id).values()
    return JsonResponse(list(products), safe=False)