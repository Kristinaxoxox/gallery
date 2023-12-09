// Layout.js
import React from 'react';
import Header from '../Header/Header'
import './Layout.css'; // Create a new CSS file for layout styles

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
