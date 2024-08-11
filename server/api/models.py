from django.db import models

class About(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='about/')
    resume = models.FileField(upload_to='resume/')

    def __str__(self):
        return self.name

class Service(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='services/')

    def __str__(self):
        return self.title

class Project(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    liveLink = models.URLField(max_length=200)
    codeLink = models.URLField(max_length=200)

    def __str__(self):
        return self.title

class Skill(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    percentage = models.IntegerField()

    def __str__(self):
        return self.name

class ContactMessage(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
