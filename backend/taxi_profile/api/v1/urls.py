from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    DocumentViewSet,
    UserProfileViewSet,
    DriverProfileViewSet,
    InviteCodeViewSet,
    NotificationViewSet,
)

router = DefaultRouter()
router.register("invitecode", InviteCodeViewSet)
router.register("document", DocumentViewSet)
router.register("userprofile", UserProfileViewSet)
router.register("driverprofile", DriverProfileViewSet)
router.register("notification", NotificationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
