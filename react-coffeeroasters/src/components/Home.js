import { Link } from "react-router-dom";
import React from "react";

function Home() {
  // scrolls browser to top of page when a new page is rendered
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__hero">
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Link to="/subscribe" onClick={handleScroll}>
            Create your plan
          </Link>
        </div>

        <div className="home__collection">
          <h2>Our collection</h2>
          <div className="collection__wrapper">
            <div className="coffee__wrapper">
              <img
                src="/assets/home/desktop/image-gran-espresso.png"
                alt="Gran espresso"
              />
              <div className="text-wrapper">
                <h3>Gran Espresso</h3>
                <p>
                  Light and flavorful blend with cocoa and black pepper for an
                  intense experience.
                </p>
              </div>
            </div>
            <div className="coffee__wrapper">
              <img
                src="/assets/home/desktop/image-planalto.png"
                alt="Planalto"
              />
              <div className="text-wrapper">
                <h3>Planalto</h3>
                <p>
                  Brazilian dark roast with rich and velvety body, and hints of
                  fruits and nuts.
                </p>
              </div>
            </div>
            <div className="coffee__wrapper">
              <img
                src="/assets/home/desktop/image-piccollo.png"
                alt="Piccollo"
              />
              <div className="text-wrapper">
                <h3>Piccollo</h3>
                <p>
                  Mild and smooth blend featuring notes of toasted almond and
                  dried cherry.
                </p>
              </div>
            </div>
            <div className="coffee__wrapper">
              <img src="/assets/home/desktop/image-danche.png" alt="Danche" />
              <div className="text-wrapper">
                <h3>Danche</h3>
                <p>
                  Ethiopian hand-harvested blend densely packed with vibrant
                  fruit notes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="home__choose-us">
          <h2>Why choose us?</h2>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>

        <div className="home__choose-us-cards">
          <div className="card">
            <img src="/assets/home/desktop/icon-coffee-bean.svg" alt="" />
            <div className="text-wrapper">
              <h2>Best quality</h2>
              <p>
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="/assets/home/desktop/icon-gift.svg" alt="" />
            <div className="text-wrapper">
              <h2>Exclusive benefits</h2>
              <p>
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="/assets/home/desktop/icon-truck.svg" alt="" />
            <div className="text-wrapper">
              <h2>Free shipping </h2>
              <p>
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>

        <div className="home__how-it-works">
          <h2>How it works</h2>

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

          <Link to="/subscribe" onClick={handleScroll}>
            Create your plan
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
