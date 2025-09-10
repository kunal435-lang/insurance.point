import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
        {/* Dummy logo as a colored circle */}
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#283593', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>IP</span>
        </div>
        <span style={{ fontWeight: '700', fontSize: '1.2rem', color: '#fff', letterSpacing: '1px' }}>Insurance Point</span>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-btn">HOME</Link>
        <Link to="/faq" className="navbar-btn">FAQ</Link>
        <Link to="/contact" className="navbar-btn">CONTACT US</Link>
      </div>
    </nav>
  );
}
