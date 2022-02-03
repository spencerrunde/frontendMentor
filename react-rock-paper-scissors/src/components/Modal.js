import { React } from "react";
import ReactDOM from "react-dom";

// rendering modal using createPortal and a separate root element
function Modal({ toggleModal }) {
  return ReactDOM.createPortal(
    <div className="container">
      <div className="container__wrapper">
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
