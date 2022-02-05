import React from "react";

function MoreButton({ toggleOpen, isOpen }) {
  return (
    <div className="moreButton">
      <p>{isOpen ? "Less" : "More"}</p>
      <button onClick={toggleOpen}>
        <img
          src={
            isOpen
              ? "images/desktop/icon-arrow-up.svg"
              : "images/desktop/icon-arrow-down.svg"
          }
          alt=""
        />
      </button>
    </div>
  );
}

export default MoreButton;
