import { React, useEffect, useRef } from "react";

import ReactDOM from "react-dom";

// rendering modal using createPortal and a separate root element
function Modal({ toggleModal }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fires toggleModal function if you click backdrop of modal
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      toggleModal();
    }
  };

  return ReactDOM.createPortal(
    <div className="container">
      <div className="container__wrapper" ref={wrapperRef}>
        <h1>Rules</h1>
        <div className="container__rules">
          <img src="images/image-rules-bonus.svg" alt="rules diagram" />
        </div>
        <button onClick={toggleModal}>
          <img src="images/icon-close.svg" alt="close button" />
        </button>
      </div>
    </div>,

    document.getElementById("modal")
  );
}

export default Modal;
