import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Header() {
  //setting state
  const [toggle, setToggle] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [source, setSource] = useState("");

  //toggles between true and false on click
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // changes image on mobile navbar
  const handleSource = () => {
    toggle === false
      ? setSource("/assets/shared/mobile/icon-hamburger.svg")
      : setSource("/assets/shared/mobile/icon-close.svg");
  };

  //closes mobile navigation on link click
  const handleMobileLink = () => {
    if (screenWidth < 768) {
      setToggle(!toggle);
    }
  };

  useEffect(handleSource, [toggle]);

  useEffect(() => {
    const handleWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <header>
      <div className="header__wrapper">
        <Link to="/">
          <img
            className="logo"
            src="/assets/shared/desktop/logo.svg"
            alt="Coffeeroasters logo"
          />
        </Link>
        {/* only renders if on mobile screen size */}
        {screenWidth < 768 && (
          <button onClick={handleToggle}>
            <img src={source} alt="Mobile menu button" />
          </button>
        )}
        {/* renders if toggle is true or if not on mobile */}
        {(toggle || screenWidth >= 768) && (
          <nav>
            <Link to="/" onClick={handleMobileLink}>
              Home
            </Link>
            <Link to="/about" onClick={handleMobileLink}>
              About us
            </Link>
            <Link to="/subscribe" onClick={handleMobileLink}>
              Create your plan
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
