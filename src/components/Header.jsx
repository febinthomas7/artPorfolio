import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header>
      <Link to="/">
        <div>
          <img src="/T.T logo1.svg" alt="TT Art Logo" />
        </div>
      </Link>

      <div className={`navbar ${mobileMenuOpen ? 'active' : ''}`} id="navbar">
        <div className="dropdown">
          <button className="dropbtn">WORK</button>
          <div className="dropdown-content">
            <Link to="/illustrations">ILLUSTRATION</Link>
            <Link to="/concept-art">CONCEPT ART</Link>
            <Link to="/matte-painting">MATTE PAINTING</Link>
          </div>
        </div>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      <div className="mobile-navbar-btn">
        <i
          className={`fa-solid fa-bars open ${mobileMenuOpen ? '' : 'active'}`}
          style={{ display: mobileMenuOpen ? 'none' : 'flex' }}
          onClick={toggleMobileMenu}
        ></i>
        <i
          className={`fa-solid fa-xmark close ${mobileMenuOpen ? 'active' : ''}`}
          style={{ display: mobileMenuOpen ? 'flex' : 'none' }}
          onClick={toggleMobileMenu}
        ></i>
      </div>
    </header>
  );
}

export default Header;
