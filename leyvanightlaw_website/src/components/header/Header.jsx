import "./Header.css";
import Logo from "../../assets/leyvanightlawlogo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="left-section">
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <img src={Logo} alt="Leyva Night Law Logo" className="logo" />
          </Link>
        </div>
        <div className="spanish-section">
          <h1 className="spanish-text">
            <span className="spanish-line">SE HABLA ESPAÑOL</span>
            <span className="spanish-phone">(323) 278-7000</span>
          </h1>
        </div>
      </div>
      <button
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}>
        <span />
        <span />
        <span />
      </button>
      <nav className="nav-section">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/services">Our Services</Link>
          </li>
          <li>
            <Link to="/benefits">Benifits</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile dropdown panel */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <button
          type="button"
          className="mobile-close"
          aria-label="Close navigation menu"
          onClick={closeMenu}>
          ✕
        </button>
        <ul className="mobile-nav-links" onClick={closeMenu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/services">Our Services</Link>
          </li>
          <li>
            <Link to="/benefits">Benifits</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
