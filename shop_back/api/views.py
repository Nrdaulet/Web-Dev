from rest_framework.decorators import action
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Product, Category
from rest_framework import viewsets
from .serializers import CategorySerializer, ProductSerializer

def products_list(request):
    products = Product.objects.filter(price__gt=100000,price__lt=500000)
    return JsonResponse(list(products.values()), safe=False, json_dumps_params={'indent':2})

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

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        products = Product.objects.filter(category_id=pk)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer