from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=300)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def to_string(self):
        return "{}: {}".format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=300)
    image_src = models.TextField(default="")
    image_2 = models.TextField(default="")
    price = models.FloatField()
    description = models.TextField(default="")
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def to_string(self):
        return "{}: {}".format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'image_src': self.image_src,
            'image_2': self.image_2,
            'price': self.price,
            'description': self.description,
        }

class Cart(models.Model):
    product = models.ManyToManyField(Product)
