import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Subscribe from "./components/Subscribe";
import { useState } from "react";

function App() {
  // setting state
  const [drinkChoice, setDrinkChoice] = useState("_____");
  const [typeChoice, setTypeChoice] = useState("_____");
  const [amountChoice, setAmountChoice] = useState("_____");
  const [grindChoice, setGrindChoice] = useState("_____");
  const [deliveryChoice, setDeliveryChoice] = useState("_____");
  const [modalOpen, setModalOpen] = useState(false);

  // toggles between true and false on click
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="subscribe"
            element={
              <Subscribe
                drinkChoice={drinkChoice}
                setDrinkChoice={setDrinkChoice}
                typeChoice={typeChoice}
                setTypeChoice={setTypeChoice}
                amountChoice={amountChoice}
                setAmountChoice={setAmountChoice}
                grindChoice={grindChoice}
                setGrindChoice={setGrindChoice}
                deliveryChoice={deliveryChoice}
                setDeliveryChoice={setDeliveryChoice}
                toggleModal={toggleModal}
              />
            }
          />
        </Routes>
        {modalOpen ? (
          <Modal
            toggleModal={toggleModal}
            drinkChoice={drinkChoice}
            typeChoice={typeChoice}
            amountChoice={amountChoice}
            grindChoice={grindChoice}
            deliveryChoice={deliveryChoice}
          />
        ) : null}
      </main>
      <Footer />
    </>
  );
}

export default App;
