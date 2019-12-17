from rest_framework import routers
from .api import ReservationsViewSet

router = routers.DefaultRouter()
router.register('api/reservations', ReservationsViewSet, 'reservations')

urlpatterns = router.urls
