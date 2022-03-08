import { React, useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

// rendering modal using createPortal and a separate root element
function Modal({
  toggleModal,
  drinkChoice,
  typeChoice,
  amountChoice,
  grindChoice,
  deliveryChoice,
}) {
  //setting state
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [orderPrice, setOrderPrice] = useState("");

  // scrolls browser to top of page when a new page is rendered
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  const wrapperRef = useRef(null);

  // fires toggleModal function if you click backdrop of modal
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      toggleModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  // function to determine price shown on order
  const handleOrderPrice = () => {
    if (amountChoice === "250g") {
      if (deliveryChoice === "Every Week") {
        setOrderPrice("$28.80");
      } else if (deliveryChoice === "Every 2 Weeks") {
        setOrderPrice("$19.20");
      } else {
        setOrderPrice("$12.00");
      }
    } else if (amountChoice === "500g") {
      if (deliveryChoice === "Every Week") {
        setOrderPrice("$52.00");
      } else if (deliveryChoice === "Every 2 Weeks") {
        setOrderPrice("$35.00");
      } else {
        setOrderPrice("$22.00");
      }
    } else {
      if (deliveryChoice === "Every Week") {
        setOrderPrice("$88.00");
      } else if (deliveryChoice === "Every 2 Weeks") {
        setOrderPrice("$64.00");
      } else {
        setOrderPrice("$42.00");
      }
    }
  };

  useEffect(() => {
    handleOrderPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <div className="container">
      <div className="container__wrapper" ref={wrapperRef}>
        <div className="container__header">
          <h1>Order Summary</h1>
        </div>
        <div className="container__order">
          <h2>
            “I drink my coffee {drinkChoice === "Capsules" ? "using" : "as"}{" "}
            <em>{drinkChoice}</em>, with a <em>{typeChoice}</em> type of bean.{" "}
            <em>{amountChoice}</em>
            {drinkChoice === "Capsules" ? "" : " ground ala "}
            {drinkChoice === "Capsules" ? "" : <em>{grindChoice}</em>}, sent to
            me <em>{deliveryChoice}</em>.”
          </h2>
          <p>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className="checkout__wrapper">
            {/* conditonal rendering based on screen size */}
            {screenWidth >= 768 ? <h3>{orderPrice} / mo</h3> : null}
            <Link
              to="/"
              onClick={() => {
                handleScroll();
                toggleModal();
              }}
            >
              Checkout{screenWidth < 768 ? ` - ${orderPrice} / mo` : null}
            </Link>
          </div>
        </div>
      </div>
    </div>,

    document.getElementById("modal")
  );
}

export default Modal;
