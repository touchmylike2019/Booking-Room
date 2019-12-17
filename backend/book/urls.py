from rest_framework import routers
from .api import RoomViewSet

router = routers.DefaultRouter()
router.register('api/book', RoomViewSet, 'book')

urlpatterns = router.urls
