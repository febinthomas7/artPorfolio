import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "auto";
      return newState;
    });
  };

  // 👇 Whenever route changes, close menu and restore scroll
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  }, [location]);

  return (
    <header>
      <Link to="/">
        <div>
          <img src="/T.T logo1.svg" alt="TT Art Logo" />
        </div>
      </Link>

      <div className={`navbar ${mobileMenuOpen ? "active" : ""}`} id="navbar">
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
          className={`fa-solid fa-bars open ${mobileMenuOpen ? "" : "active"}`}
          style={{ display: mobileMenuOpen ? "none" : "flex" }}
          onClick={toggleMobileMenu}
        ></i>
        <i
          className={`fa-solid fa-xmark close ${
            mobileMenuOpen ? "active" : ""
          }`}
          style={{ display: mobileMenuOpen ? "flex" : "none" }}
          onClick={toggleMobileMenu}
        ></i>
      </div>
    </header>
  );
}

export default Header;
