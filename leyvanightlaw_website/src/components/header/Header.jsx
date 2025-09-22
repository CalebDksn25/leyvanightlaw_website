import "./Header.css";
import Logo from "../../assets/leyvanightlawlogo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo-section">
          <img src={Logo} alt="Leyva Night Law Logo" className="logo" />
        </div>
        <div className="spanish-section">
          <h1 className="spanish-text">SE HABLA ESPAÑOL: (323) 278-7000</h1>
        </div>
      </div>
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
            <Link to="/benefits">Your Rights & Benifits</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
