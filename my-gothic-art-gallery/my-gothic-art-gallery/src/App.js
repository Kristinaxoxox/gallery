import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import GalleryPage from "./GalleryPage";
import "./App.css";

const Home = () => (
  <div>
    <div className="art-gallery-container">
      <header className="art-gallery-header">
        <h1>Gothic Art Gallery</h1>
      </header>
      <main className="art-gallery-main"></main>
      <footer className="art-gallery-footer">
        <Link to="/gallery" className="gallery-link">
          Enter the Gallery
        </Link>
      </footer>
    </div>

    <h2>Welcome to the Home Page</h2>
    <p>Explore the mysterious world of Gothic art.</p>
  </div>
);

function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
