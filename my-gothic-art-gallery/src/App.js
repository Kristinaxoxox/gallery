// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import GalleryPage from './components/GalleryPage/GalleryPage';
import PotionsPage from './components/PotionsPage/PotionsPage';
import SpellsPage from './components/SpellsPage/SpellsPage';
import TarotReadingPage from './components/TarotReadingPage/TarotReadingPage';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import RegisterPage from './components/RegisterPage/RegisterPage';

import { AuthProvider } from './context/authContext';

import './App.css';

const Home = () => (
  <div className="art-gallery-container">
    <main className="art-gallery-main">
      {/* Content of your home page */}
      <h2>Home Page</h2>
      {/* Your home page content */}
    </main>

    <footer className="art-gallery-footer">
      {/* Footer content */}
    </footer>
  </div>
);

const App = () => {
  const handleLogin = (username) => {
    // Handle the login logic, e.g., update the user state
    console.log(`${username} logged in`);
  };

  return (
    <div>
      <Router>
        <AuthProvider>
          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/potions" element={<PotionsPage />} />
              <Route path="/spells" element={<SpellsPage />} />
              <Route path="/tarot" element={<TarotReadingPage />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;

