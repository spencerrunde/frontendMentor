import React from "react";

const Header = ({ score }) => (
  <header>
    <img src="images/logo-bonus.svg" alt="rock paper scissors lizard spock" />
    <div className="header__wrapper">
      <h1>Score</h1>
      <span>{score}</span>
    </div>
  </header>
);

export default Header;
