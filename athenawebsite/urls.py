from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='homepage'),
    path('login/', views.login, name='login'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('quiz1/', views.quiz1, name='quiz1'),
    path('underconstruction/', views.underconstruction, name='underconstruction')
]

