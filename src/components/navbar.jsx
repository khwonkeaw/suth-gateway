import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import logo from '../assests/images/logo_SUTH.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="SUTH Logo" className="logo-img" />
        </div>

        <ul className="nav-menu">
          <li><a href="/" className="nav-links">หน้าแรก</a></li>
          <li><a href="#contact" className="nav-links">เกี่ยวกับเรา</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;