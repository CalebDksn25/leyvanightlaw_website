import "./Footer.css";
//import { Link } from "react-router-dom";
import logo from "../../assets/leyvanightlawlogo.webp";

const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer__container">
        <div className="footer__brand">
          <img
            className="footer__logo"
            src={logo}
            alt="Leyva & Night APC logo"
          />
          <div className="footer__name">Leyva & Night APC</div>
          <div className="footer__tag">Workers’ Compensation Attorneys</div>
        </div>

        <div className="footer__contact">
          <a className="footer__phone" href="tel:+16267969400">
            (626) 796-9400
          </a>
          <div className="footer__copy">
            © {new Date().getFullYear()} Leyva & Night APC
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
