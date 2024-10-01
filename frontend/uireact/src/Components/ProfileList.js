// src/components/ProfileList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileList = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const fetchProfiles = async () => {
            const response = await fetch('http://localhost:8000/api/users/'); // Remplacez par votre endpoint Django
            const data = await response.json();
            console.log(data);
            setProfiles(data);
        };

        fetchProfiles();
    }, []);

    return (
        <div className="container">
            <h1 className="mt-4">Liste des Profils</h1>
            <div className="row">
                {profiles.map((profile) => (
                    <div className="col-md-4 mb-4" key={profile.id}>
                        <div className="card">
                            <img
                                src={profile.image} // Assurez-vous que l'image est disponible dans l'objet de profil
                                className="card-img-top"
                                alt={profile.name}
                            />
                            
                            <div className="card-body">
                                <h5 className="card-title">{profile.name}</h5>
                                <Link to={`/profiles/${profile.id}`} className="btn btn-primary">
                                    Voir le Profil
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileList;
