import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Registro from "./pages/Registro";
import AboutPage from "./pages/AboutPage";
import Catalogo from "./pages/Catalogo";
import Paquetes from "./pages/Paquetes";
import PaypalPage from "./pages/PaypalPage";
import UploadVideoPage from "./pages/UploadVideoPage";
import AdminPage from "./pages/AdminPage";
import VideoPlayer from "./pages/VideoPlayer";
import Footer from "./pages/Footer";

function App() {
  const [footerFlag, setFooterFlag] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage handleFooter={setFooterFlag} />} />
        <Route path="/registro" element={<Registro handleFooter={setFooterFlag} />} />
        <Route path="/PaypalPage" element={<PaypalPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/upload" element={<UploadVideoPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route
          path="/video"
          element={
            <VideoPlayer videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
          }
        />
      </Routes>
      {footerFlag && <Footer />}
    </Router>
  );
}

export default App;
