import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cabegalho.scss';
import logo from '../image/Sabores da rua.png';

const Cabegalho = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <img src={logo} alt="Logo da Confeitaria" className="logo" />
      {isMobile ? (
        <>
          <button 
            className="menu-button" 
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            Menu
          </button>
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <Link to="/" className="menu-item">Home</Link>
              <Link to="/Sobre" className="menu-item">Sobre nós</Link>
              <Link to="/Produtos" className="menu-item">Produtos</Link>
              <Link to="/Login" className="menu-item">Login</Link>
              <Link to="/Contato" className="menu-item">Contato</Link>
              <Link to="/Utensílios" className="button-item">Utensílios</Link>
              <Link to="/Adm" className="button-item">Adm</Link>
            </div>
          )}
        </>
      ) : (
        <div className="nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/Sobre" className="nav-item">Sobre nós</Link>
          <Link to="/Produtos" className="nav-item">Produtos</Link>
          <Link to="/Login" className="nav-item">Login</Link>
          <Link to="/Contato" className="nav-item">Contato</Link>
          <Link to="/Utensílios" className="button-item">Utensílios</Link>
          <Link to="/Adm" className="button-item">Adm</Link>
        </div>
      )}
    </div>
  );
};

export default Cabegalho;
