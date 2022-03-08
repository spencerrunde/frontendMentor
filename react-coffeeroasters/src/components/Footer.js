import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  // scrolls browser to top of page when a new page is rendered
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="footer__wrapper">
        <Link to="/" onClick={handleScroll}>
          <img
            className="logo"
            src="/assets/shared/desktop/logo-footer.svg"
            alt="coffeeroasters logo"
          />
        </Link>
        <div className="footer__links">
          <Link to="/" onClick={handleScroll}>
            Home
          </Link>
          <Link to="/about" onClick={handleScroll}>
            About us
          </Link>
          <Link to="/subscribe" onClick={handleScroll}>
            Create your plan
          </Link>
        </div>
        <div className="footer__socials">
          <Link to="/" onClick={handleScroll}>
            <img
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="facebook"
            />
          </Link>
          <Link to="/" onClick={handleScroll}>
            <img
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="instagram"
            />
          </Link>
          <Link to="/" onClick={handleScroll}>
            <img src="/assets/shared/desktop/icon-twitter.svg" alt="twitter" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
