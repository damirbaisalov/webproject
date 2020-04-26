from cart import serializers
from cart.models import Brand

class BrandSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self,validated_data):
        brand = Brand.objects.create(name=validated_data.get('name'))
        return brand

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance