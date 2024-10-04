import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaypalPage from './pages/PaypalPage';
import AboutPage from './pages/AboutPage';
import UserProfile from './pages/UserProfile';
import UploadVideoPage from './pages/UploadVideoPage';
import SubscriptionPage from './pages/SubscriptionPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import VideoPlayer from './pages/VideoPlayer'; 
import Catalogo from './pages/Catalogo';
import Paquetes from './pages/Paquetes';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<HomePage />} />
        <Route path="/PaypalPage" element={<PaypalPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/upload" element={<UploadVideoPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/paquetes" element={<Paquetes />} />
        {/* Nueva ruta temporal para probar el componente VideoPlayer */}
        <Route
          path="/video"
          element={<VideoPlayer videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />}
        />
      </Routes>
      
    </Router>
  );
}

export default App;
