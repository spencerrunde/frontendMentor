import React, { useEffect, useState } from "react";

function Subscribe({
  drinkChoice,
  setDrinkChoice,
  typeChoice,
  setTypeChoice,
  amountChoice,
  setAmountChoice,
  grindChoice,
  setGrindChoice,
  deliveryChoice,
  setDeliveryChoice,
  toggleModal,
}) {
  //setting state
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [activeButton2, setActiveButton2] = useState("");
  const [activeButton3, setActiveButton3] = useState("");
  const [activeButton4, setActiveButton4] = useState("");
  const [activeButton5, setActiveButton5] = useState("");
  const [orderButton, setOrderButton] = useState(false);

  // functions to handle toggle on click
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  const handleToggle3 = () => {
    setToggle3(!toggle3);
  };

  const handleToggle4 = () => {
    if (drinkChoice !== "Capsules") {
      setToggle4(!toggle4);
    }
  };

  const handleToggle5 = () => {
    setToggle5(!toggle5);
  };

  //functions to handle setting of active button on click
  const handleActiveButton = (button) => {
    if (button !== activeButton) {
      setActiveButton(button);
    }
  };

  const handleActiveButton2 = (button) => {
    if (button !== activeButton2) {
      setActiveButton2(button);
    }
  };

  const handleActiveButton3 = (button) => {
    if (button !== activeButton3) {
      setActiveButton3(button);
    }
  };

  const handleActiveButton4 = (button) => {
    if (button !== activeButton4) {
      setActiveButton4(button);
    }
  };

  const handleActiveButton5 = (button) => {
    if (button !== activeButton5) {
      setActiveButton5(button);
    }
  };

  // functions to handle order state
  const handleDrink = (e) => {
    setDrinkChoice(e.currentTarget.dataset.id);
  };

  const handleType = (e) => {
    setTypeChoice(e.currentTarget.dataset.id);
  };

  const handleAmount = (e) => {
    setAmountChoice(e.currentTarget.dataset.id);
  };

  const handleGrind = (e) => {
    setGrindChoice(e.currentTarget.dataset.id);
  };

  const handleDelivery = (e) => {
    setDeliveryChoice(e.currentTarget.dataset.id);
  };

  const handleOrderButton = () => {
    if (
      drinkChoice !== "_____" &&
      typeChoice !== "_____" &&
      amountChoice !== "_____" &&
      deliveryChoice !== "_____"
    ) {
      if (drinkChoice === "Capsules" && grindChoice === "_____") {
        setOrderButton(true);
      } else if (grindChoice !== "_____") {
        setOrderButton(true);
      }
    }
  };

  useEffect(() => {
    handleOrderButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drinkChoice, typeChoice, amountChoice, grindChoice, deliveryChoice]);

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
    <div className="subscribe">
      <div className="subscribe__wrapper">
        <div className="subscribe__hero">
          <h1>Create a plan</h1>
          <p>
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>

        <div className="subscribe__how-it-works">
          <div className="how-it-works__wrapper">
            <div className="text-wrapper">
              <span>01</span>
              <h3>Pick your coffee</h3>
              <p>
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>
            <div className="text-wrapper">
              <span>02</span>
              <h3>Choose the frequency</h3>
              <p>
                Customize your order frequency, quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </div>
            <div className="text-wrapper">
              <span>03</span>
              <h3>Receive and enjoy!</h3>
              <p>
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-class coffees curated to provide a
                distinct tasting experience.
              </p>
            </div>
          </div>
        </div>

        <div className="subscribe__accordion">
          {/* nav element only renders on desktop */}
          {screenWidth >= 1440 && (
            <div className="desktop-nav__wrapper">
              <nav className="desktop-nav">
                <a
                  href="#01"
                  onClick={() => {
                    setToggle(true);
                  }}
                >
                  <div className="link__wrapper">
                    <span>01</span> Preferences
                  </div>
                </a>
                <a
                  href="#02"
                  onClick={() => {
                    setToggle2(true);
                  }}
                >
                  <div className="link__wrapper">
                    <span>02</span> Bean type
                  </div>
                </a>
                <a
                  href="#03"
                  onClick={() => {
                    setToggle3(true);
                  }}
                >
                  <div className="link__wrapper">
                    <span>03</span> Quantity
                  </div>
                </a>
                <a
                  href="#04"
                  onClick={() => {
                    if (drinkChoice !== "Capsules") {
                      setToggle4(true);
                    }
                  }}
                >
                  <div className="link__wrapper">
                    <span>04</span> Grind option
                  </div>
                </a>
                <a
                  href="#05"
                  onClick={() => {
                    setToggle5(true);
                  }}
                >
                  <div className="link__wrapper">
                    <span>05</span> Deliveries
                  </div>
                </a>
              </nav>
            </div>
          )}
          <div className="accordion--1" id="01">
            <button
              className={toggle ? "accordion__title open" : "accordion__title"}
              onClick={handleToggle}
            >
              <h3>How do you drink your coffee?</h3>
              <img src="/assets/plan/desktop/icon-arrow.svg" alt="" />
            </button>
            <div
              className={
                toggle ? "accordion__wrapper active" : "accordion__wrapper"
              }
            >
              <button
                onClick={(e) => {
                  handleDrink(e);
                  handleActiveButton("button1");
                }}
                className={activeButton === "button1" ? "active" : null}
                data-id="Capsules"
              >
                <h4>Capsule</h4>
                <p>Compatible with Nespresso systems and similar brewers</p>
              </button>
              <button
                onClick={(e) => {
                  handleDrink(e);
                  handleActiveButton("button2");
                }}
                className={activeButton === "button2" ? "active" : null}
                data-id="Filter"
              >
                <h4>Filter</h4>
                <p>
                  For pour over or drip methods like Aeropress, Chemex, and V60
                </p>
              </button>
              <button
                onClick={(e) => {
                  handleDrink(e);
                  handleActiveButton("button3");
                }}
                className={activeButton === "button3" ? "active" : null}
                data-id="Espresso"
              >
                <h4>Espresso</h4>
                <p>
                  Dense and finely ground beans for an intense, flavorful
                  experience
                </p>
              </button>
            </div>
          </div>
          <div className="accordion--2" id="02">
            <button
              className={toggle2 ? "accordion__title open" : "accordion__title"}
              onClick={handleToggle2}
            >
              <h3>What type of coffee?</h3>
              <img src="/assets/plan/desktop/icon-arrow.svg" alt="" />
            </button>
            <div
              className={
                toggle2 ? "accordion__wrapper active" : "accordion__wrapper"
              }
            >
              <button
                onClick={(e) => {
                  handleType(e);
                  handleActiveButton2("button1");
                }}
                className={activeButton2 === "button1" ? "active" : null}
                data-id="Single Origin"
              >
                <h4>Single origin</h4>
                <p>
                  Distinct, high quality coffee from a specific family-owned
                  farm
                </p>
              </button>
              <button
                onClick={(e) => {
                  handleType(e);
                  handleActiveButton2("button2");
                }}
                className={activeButton2 === "button2" ? "active" : null}
                data-id="Decaf"
              >
                <h4>Decaf</h4>
                <p>
                  Just like regular coffee, except the caffeine has been removed
                </p>
              </button>
              <button
                onClick={(e) => {
                  handleType(e);
                  handleActiveButton2("button3");
                }}
                className={activeButton2 === "button3" ? "active" : null}
                data-id="Blended"
              >
                <h4>Blended</h4>
                <p>
                  Combination of two or three dark roasted beans of organic
                  coffees
                </p>
              </button>
            </div>
          </div>
          <div className="accordion--3" id="03">
            <button
              className={toggle3 ? "accordion__title open" : "accordion__title"}
              onClick={handleToggle3}
            >
              <h3>How much would you like?</h3>
              <img src="/assets/plan/desktop/icon-arrow.svg" alt="" />
            </button>
            <div
              className={
                toggle3 ? "accordion__wrapper active" : "accordion__wrapper"
              }
            >
              <button
                onClick={(e) => {
                  handleAmount(e);
                  handleActiveButton3("button1");
                }}
                className={activeButton3 === "button1" ? "active" : null}
                data-id="250g"
              >
                <h4>250g</h4>
                <p>
                  Perfect for the solo drinker. Yields about 12 delicious cups.
                </p>
              </button>
              <button
                onClick={(e) => {
                  handleAmount(e);
                  handleActiveButton3("button2");
                }}
                className={activeButton3 === "button2" ? "active" : null}
                data-id="500g"
              >
                <h4>500g</h4>
                <p>
                  Perfect option for a couple. Yields about 40 delectable cups.
                </p>
              </button>
              <button
                onClick={(e) => {
                  handleAmount(e);
                  handleActiveButton3("button3");
                }}
                className={activeButton3 === "button3" ? "active" : null}
                data-id="1000g"
              >
                <h4>1000g</h4>
                <p>
                  Perfect for offices and events. Yields about 90 delightful
                  cups.
                </p>
              </button>
            </div>
          </div>
          <div
            className={
              drinkChoice === "Capsules"
                ? "accordion--4 disabled"
                : "accordion--4"
            }
            id="04"
          >
            <button
              className={toggle4 ? "accordion__title open" : "accordion__title"}
              onClick={handleToggle4}
            >
              <h3>Want us to grind them?</h3>
              <img src="/assets/plan/desktop/icon-arrow.svg" alt="" />
            </button>
            <div
              className={
                toggle4 && drinkChoice !== "Capsules"
                  ? "accordion__wrapper active"
                  : "accordion__wrapper"
              }
            >
              <button
                onClick={(e) => {
                  handleGrind(e);
                  handleActiveButton4("button1");
                }}
                className={activeButton4 === "button1" ? "active" : null}
                data-id="Wholebean"
              >
                <h4>Wholebean</h4>
                <p>Best choice if you cherish the full sensory experience</p>
              </button>
              <button
                onClick={(e) => {
                  handleGrind(e);
                  handleActiveButton4("button2");
                }}
                className={activeButton4 === "button2" ? "active" : null}
                data-id="Filter"
              >
                <h4>Filter</h4>
                <p>
                  For drip or pour-over coffee methods such as V60 or Aeropress
                </p>
              </button>
              <button
                onClick={(e) => {
                  handleGrind(e);
                  handleActiveButton4("button3");
                }}
                className={activeButton4 === "button3" ? "active" : null}
                data-id="Cafetiére"
              >
                <h4>Cafetiére</h4>
                <p>
                  Course ground beans specially suited for french press coffee
                </p>
              </button>
            </div>
          </div>
          <div className="accordion--5" id="05">
            <button
              className={toggle5 ? "accordion__title open" : "accordion__title"}
              onClick={handleToggle5}
            >
              <h3>How often should we deliver?</h3>
              <img src="/assets/plan/desktop/icon-arrow.svg" alt="" />
            </button>
            <div
              className={
                toggle5 ? "accordion__wrapper active" : "accordion__wrapper"
              }
            >
              <button
                onClick={(e) => {
                  handleDelivery(e);
                  handleActiveButton5("button1");
                }}
                className={activeButton5 === "button1" ? "active" : null}
                data-id="Every Week"
              >
                <h4>Every week</h4>
                <p>
                  {amountChoice === "250g"
                    ? "$7.20"
                    : amountChoice === "500g"
                    ? "$9.60"
                    : "$12.00"}{" "}
                  per shipment. Includes free first-class shipping.
                </p>
              </button>
              <button
                onClick={(e) => {
                  handleDelivery(e);
                  handleActiveButton5("button2");
                }}
                className={activeButton5 === "button2" ? "active" : null}
                data-id="Every 2 Weeks"
              >
                <h4>Every 2 weeks</h4>
                <p>
                  {amountChoice === "250g"
                    ? "$13.00"
                    : amountChoice === "500g"
                    ? "$17.50"
                    : "$22.00"}{" "}
                  per shipment. Includes free priority shipping.
                </p>
              </button>
              <button
                onClick={(e) => {
                  handleDelivery(e);
                  handleActiveButton5("button3");
                }}
                className={activeButton5 === "button3" ? "active" : null}
                data-id="Every Month"
              >
                <h4>Every month</h4>
                <p>
                  {amountChoice === "250g"
                    ? "$22.00"
                    : amountChoice === "500g"
                    ? "$32.00"
                    : "$42.00"}{" "}
                  per shipment. Includes free priority shipping.
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="subscribe__order">
          <div className="order__summary">
            <h4>Order summary</h4>
            <p>
              “I drink my coffee {drinkChoice === "Capsules" ? "using" : "as"}{" "}
              <em>{drinkChoice}</em>, with a <em>{typeChoice}</em> type of bean.{" "}
              <em>{amountChoice}</em>
              {drinkChoice === "Capsules" ? "" : " ground ala "}
              {drinkChoice === "Capsules" ? "" : <em>{grindChoice}</em>}, sent
              to me <em>{deliveryChoice}</em>.”
            </p>
          </div>
          <button
            className={orderButton === true ? null : "disabled"}
            //disables button if user has not made a selection for every state
            onClick={() => {
              if (
                drinkChoice !== "_____" &&
                typeChoice !== "_____" &&
                amountChoice !== "_____" &&
                deliveryChoice !== "_____"
              ) {
                if (drinkChoice === "Capsules" && grindChoice === "_____") {
                  toggleModal();
                } else if (grindChoice !== "_____") {
                  toggleModal();
                }
              }
            }}
          >
            Create my plan!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
