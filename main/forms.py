from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):
    
    class Meta:
        model = Contact
        fields = ("name","phone_number","email")
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Ваше имя'}),
            'phone_number': forms.TextInput(attrs={'placeholder': 'Ваш номер телефона'}),
            'email': forms.TextInput(attrs={'placeholder': 'Ваш E-mail'}),
        }
