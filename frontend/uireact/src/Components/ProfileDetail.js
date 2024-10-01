// src/components/ProfileDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  "./styleit.css" 

const ProfileDetail = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(`http://localhost:8000/api/users/${id}/`); // Remplacez par votre endpoint Django
            const data = await response.json();
            setProfile(data);
        };

        fetchProfile();
    }, [id]);

    if (!profile) return <p>Loading...</p>;

    return (
        <div className="container">
            <h1 className="mt-4">{profile.name}</h1>
            <img src={profile.image} className="img-fluid" alt={profile.name} />
            <div className="mt-4">
                <h4>Détails du Profil</h4>
                <p><strong>Email :</strong> {profile.email}</p>
                <p><strong>Profession :</strong> {profile.profession}</p>
                <p><strong>Localisation :</strong> {profile.location}</p>
            </div>
        </div>
    );
};

export default ProfileDetail;
