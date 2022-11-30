import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import Logo from "../assets/images/hp_logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <Link style={{ textDecoration: "none" }} to="/">
          <figure className="footer__logo">
            <img src={Logo} alt="HealthPoint Logo" />
            <h2 className="footer__logo--text">HealthPoint</h2>
          </figure>
        </Link>
        <p className="footer__text">&copy; HealthPoint Fitness Center, LLC. </p>
        <p className="footer__text">All righs reserved. </p>
      </section>
      <section>
        <h2 className="footer__header">Company</h2>
        <ul>
          <li className="footer__text">
            <Link to="/about" className="footer__text">
              About
            </Link>
          </li>
          <li className="footer__text">
            <Link to="/events" className="footer__text">
              Events
            </Link>
          </li>
          <li className="footer__text">
            <Link to="/" className="footer__text">
              Sponsors
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="footer__header">Support</h2>
        <ul>
          <li className="footer__text">
            <Link to="/contact" className="footer__text">
              Contacts
            </Link>
          </li>
          <li className="footer__text">
            <Link to="/faq" className="footer__text">
              FAQ
            </Link>
          </li>
          <li className="footer__text">
            <Link to="/legal" className="footer__text">
              Legal
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="footer__header">Socials</h2>
        <ul>
          <li className="footer__text">
            <a
              href="https://instagram.com"
              target="_blank"
              className="footer__icon"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="footer__text">
            <a
              href="https://facebook.com"
              target="_blank"
              className="footer__icon"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className="footer__text">
            <a
              href="https://twitter.com"
              target="_blank"
              className="footer__icon"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
