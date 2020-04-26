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
	description = models.TextField(default="")
	price = models.FloatField()
	category = models.ForeignKey(Category, on_delete=models.CASCADE)

	def to_string(self):
		return "{}: {}".format(self.id, self.name)

	def to_json(self):
		return {
			'id': self.id,
			'name': self.name,
            'price': self.price,
			'description': self.description
		}
