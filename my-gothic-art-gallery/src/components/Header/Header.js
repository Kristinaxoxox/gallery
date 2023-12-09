// Header.js
import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../../context/authContext';
import { highlightCurrentPage } from '../currentPageHighlight';
import './Header.css'; // Import your CSS file

export default function Header() {
  const {
    isAuthenticated,
    username,
    logoutHandler,
  } = useContext(AuthContext);

  const location = useLocation();

  useEffect(() => {
    highlightCurrentPage(location.pathname);
  }, [location.pathname]);

  return (
    <header>
      <h1><Link className="home" to="/">GamesPlay</Link></h1>
      <nav>
        <Link to="/gallery">Gallery</Link>
        <Link to="/potions">Potions</Link>
        <Link to="/spells">Spells</Link>
        <Link to="/tarot">Tarot</Link>

        {isAuthenticated ? (
          <div id="user">
            <button onClick={logoutHandler}>Logout</button>
            <span>| {username}</span>
          </div>
        ) : (
          <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

