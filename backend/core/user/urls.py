from django.urls import path
from .views import UserProfileCreateView
from .views import UserList, UserDetail

urlpatterns = [
    path('api/user/', UserProfileCreateView.as_view(), name='user-profile-create'),
    path('api/users/', UserList.as_view(), name='user-list'),
    path('api/users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
]
