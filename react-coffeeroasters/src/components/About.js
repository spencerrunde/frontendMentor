import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__hero">
          <h1>About us</h1>
          <p>
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>

        <div className="about__commitment">
          <picture>
            <source
              srcSet="/assets/about/desktop/image-commitment.jpg"
              media="(min-width: 1440px)"
            />
            <source
              srcSet="/assets/about/tablet/image-commitment.jpg"
              media="(min-width: 768px)"
            />
            <img src="/assets/about/mobile/image-commitment.jpg" alt="" />
          </picture>
          <div className="commitment__wrapper">
            <h2>Our commitment</h2>
            <p>
              We’re built on a simple mission and a commitment to doing good
              along the way. We want to make it easy for you to discover and
              brew the world’s best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly
              60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of
              farmers through with well above fair-trade benchmarks. We also
              offer training, support farm community initiatives, and invest in
              coffee plant science. Curating only the finest blends, we roast
              each lot to highlight tasting profiles distinctive to their native
              growing region.
            </p>
          </div>
        </div>

        <div className="about__quality">
          <picture>
            <source
              srcSet="/assets/about/desktop/image-quality.jpg"
              media="(min-width: 1440px)"
            />
            <source
              srcSet="/assets/about/tablet/image-quality.jpg"
              media="(min-width: 768px)"
            />
            <img src="/assets/about/mobile/image-quality.jpg" alt="" />
          </picture>
          <h2>Uncompromising quality</h2>
          <p>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>

        <div className="about__headquarters">
          <h2>Our headquarters</h2>

          <div className="headquarters__wrapper">
            <div className="location__wrapper">
              <img src="/assets/about/desktop/illustration-uk.svg" alt="" />
              <h3>United Kingdom</h3>
              <p>68 Asfordby Rd</p>
              <p>Alcaston</p>
              <p>SY6 1YA</p>
              <p>+44 1241 918425</p>
            </div>

            <div className="location__wrapper">
              <img src="/assets/about/desktop/illustration-canada.svg" alt="" />
              <h3>Canada</h3>
              <p>1528 Eglinton Avenue</p>
              <p>Toronto</p>
              <p>Ontario M4P 1A6</p>
              <p>+1 416 485 2997</p>
            </div>

            <div className="location__wrapper">
              <img
                src="/assets/about/desktop/illustration-australia.svg"
                alt=""
              />
              <h3>Australia</h3>
              <p>36 Swanston Street</p>
              <p>Kewell</p>
              <p>Victoria</p>
              <p>+61 4 9928 3629</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
