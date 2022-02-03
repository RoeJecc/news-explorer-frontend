import { NavLink } from "react-router-dom";
import github from "../../images/github.png";
import facebook from "../../images/facebook.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">© Supersite, Powered by News API</p>
        <nav className="footer__nav">
          <div className="footer__links">
            <NavLink to="/" className="footer__link">
              Home
            </NavLink>
            <a
              href="https://practicum.yandex.com"
              className="footer__link"
              rel="noreferrer noopener"
              target="_blank"
            >
              Practicum by Yandex
            </a>
          </div>
          <div className="footer__socials">
            <a
              href="https://github.com/roejecc/news-explorer-frontend"
              rel="noreferrer noopener"
              className="footer__icon"
              target="_blank"
            >
              <img src={github} alt="Github Icon" />
            </a>
            <a
              href="https://facebook.com"
              rel="noreferrer noopener"
              className="footer__icon"
              target="_blank"
            >
              <img src={facebook} alt="Facebook Icon" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
