from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=300)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Brand(models.Model):
    name = models.CharField(max_length=300)
    class Meta:
        verbose_name = 'Brand'
        verbose_name_plural = 'Brands'

        def to_json(self):
            return {
                'id': self.id,
                'name': self.name
            }

    def to_string(self):
        return "{}: {}".format(self.id, self.name)


class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(default='100')
    description = models.TextField(default='')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description
        }
