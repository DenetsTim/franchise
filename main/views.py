from django.shortcuts import render
from .forms import ContactForm

def index(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, "main/index.html", {"form" : form, "success": True})
        
        print(form.errors.as_data())
        errors = [i.replace("Contact", "Контакт") for i in form.errors.as_text().split("  * ") if not i.startswith("*")]
        
        return render(request, "main/index.html", {"form" : form, "errors": errors})
    else:
        form = ContactForm()
    
    return render(request, "main/index.html", {"form" : form})
