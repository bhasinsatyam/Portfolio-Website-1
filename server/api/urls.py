from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AboutViewSet, ServiceViewSet, ProjectViewSet, SkillViewSet, ContactMessageViewSet

router = DefaultRouter()
router.register(r'about', AboutViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'contact', ContactMessageViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
