from rest_framework import serializers
from api.models import Category, Product

class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class ProductSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    price = serializers.IntegerField()
    description = serializers.CharField()
    category = CategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Product
        fields = '__all__'

class CategoryWithProductSerlializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'products')
# class ProductSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     name = serializers.CharField()
#     price = serializers.IntegerField()
#     description = serializers.CharField()
#     category_id = serializers.IntegerField()
#
#
# class CategorySerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = Category
#         fields = ('id', 'name')
#
#
# class ProductSerializer(serializers.ModelSerializer):
#     category_id = serializers.IntegerField(write_only=True)
#
#     class Meta:
#         model = Product
#         fields = ('id', 'name', 'price', 'description', 'category_id')