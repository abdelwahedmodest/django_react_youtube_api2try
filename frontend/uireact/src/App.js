import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthModal from './Components/AuthModall';
import UserProfileForm from './Components/UserProfilFor';
import ProfileList from './Components/ProfileList';
import ProfileDetail from './Components/ProfileDetail';
import Navbar from './Components/Navbar'; // Importez la navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar visible sur toutes les pages */}
      <Routes>
        <Route path="auth" element={<AuthModal />} />
        <Route path="user" element={<UserProfileForm />} />
        <Route path="/" element={<ProfileList />} />
        <Route path="/profiles/:id" element={<ProfileDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
