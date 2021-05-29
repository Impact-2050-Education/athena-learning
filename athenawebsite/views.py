from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login

# Create your views here.

def index(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'html/login.html')

def dashboard(request):
    return render(request, 'html/student_dashboard.html')

def quiz1(request):
    return render(request, 'html/quiz1.html')

def underconstruction(request):
    return render(request, 'html/underconstruction.html')

