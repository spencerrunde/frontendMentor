import React from "react";

function MoreButton({ toggleOpen, isOpen }) {
  return (
    <button className="moreButton" onClick={toggleOpen}>
      <p>{isOpen ? "Less" : "More"}</p>
      <button aria-label="More Button" onClick={toggleOpen}>
        <img
          src={
            isOpen
              ? "images/desktop/icon-arrow-up.svg"
              : "images/desktop/icon-arrow-down.svg"
          }
          alt=""
        />
      </button>
    </button>
  );
}

export default MoreButton;
