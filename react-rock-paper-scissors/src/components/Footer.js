import { React, useState } from "react";

import Modal from "./Modal";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // toggles between true and false on click
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <footer>
        <button onClick={toggleModal}>Rules</button>
      </footer>
      {/* renders modal if modalOpen = true */}
      {modalOpen ? <Modal toggleModal={toggleModal} /> : null}
    </>
  );
};

export default Footer;
