from django.contrib import admin
from .models import UserProfile  # Importez votre modèle UserProfile

# Créez une classe d'administration personnalisée si nécessaire
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'profession', 'status', 'location', 'image')  # Champs à afficher dans la liste
    search_fields = ('name', 'profession')  # Champs à rechercher dans l'admin

# Enregistrez le modèle UserProfile avec la classe d'administration
admin.site.register(UserProfile, UserProfileAdmin)

