// Importation des modules nécessaires depuis React et axios
import React, { useState } from 'react'; // Importation de React et du hook useState pour gérer l'état
import axios from 'axios'; // Importation d'axios pour effectuer des requêtes HTTP
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation du CSS Bootstrap

// Déclaration du composant fonctionnel UserProfileForm
const UserProfileForm = () => {
    // Définition de l'état local formData avec useState
    const [formData, setFormData] = useState({
        name: '', // Champ pour le nom de l'utilisateur
        profession: '', // Champ pour la profession de l'utilisateur
        status: '', // Champ pour le statut de l'utilisateur
        location: '', // Champ pour la localisation de l'utilisateur
        image: null, // Champ pour l'image de l'utilisateur, initialisé à null
    });

    // Fonction pour gérer les changements dans les champs de formulaire
    const handleChange = (e) => {
        const { name, value, files } = e.target; // Déstructuration des propriétés de l'élément cible
        // Vérification si le champ modifié est celui de l'image
        if (name === "image") {
            // Si c'est le champ d'image, on met à jour l'état avec le fichier sélectionné
            setFormData({ ...formData, image: files[0] });
        } else {
            // Pour les autres champs, on met à jour l'état avec la nouvelle valeur
            setFormData({ ...formData, [name]: value });
        }
    };

    // Fonction asynchrone pour gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire
        const form = new FormData(); // Création d'une nouvelle instance de FormData
        // Itération sur les clés de formData pour les ajouter à FormData
        for (const key in formData) {
            form.append(key, formData[key]); // Ajout de chaque champ à FormData
        }

        try {
            // Envoi d'une requête POST à l'API pour créer le profil utilisateur
            await axios.post('http://localhost:8000/api/user/', form, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Spécification du type de contenu
                },
            });
            // Affichage d'un message de succès si la requête est réussie
            alert('User profile created successfully!');
        } catch (error) {
            // Gestion des erreurs en cas d'échec de la requête
            console.error('There was an error creating the user profile!', error);
        }
    };

    // Retourne le formulaire JSX
    return (
        <div className="container mt-5">
            <h2>Create User Profile</h2>
            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        id="name" 
                        onChange={handleChange} 
                        placeholder="Enter your name" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="profession">Profession</label>
                    <input 
                        type="text" 
                        name="profession" 
                        className="form-control" 
                        id="profession" 
                        onChange={handleChange} 
                        placeholder="Enter your profession" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <input 
                        type="text" 
                        name="status" 
                        className="form-control" 
                        id="status" 
                        onChange={handleChange} 
                        placeholder="Enter your status" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input 
                        type="text" 
                        name="location" 
                        className="form-control" 
                        id="location" 
                        onChange={handleChange} 
                        placeholder="Enter your location" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Profile Image</label>
                    <input 
                        type="file" 
                        name="image" 
                        className="form-control-file" 
                        id="image" 
                        onChange={handleChange} 
                        accept="image/*" 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button> {/* Bouton pour soumettre le formulaire */}
            </form>
        </div>
    );
};

// Exportation du composant UserProfileForm pour utilisation dans d'autres fichiers
export default UserProfileForm;
