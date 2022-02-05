import { React, useEffect, useState } from "react";

function Clock({ clockInfo, geoIpInfo, greeting }) {
  const [imageSrc, setImageSrc] = useState("");

  // fixing error caused by null value and formatting datetime to 24:60 format
  const formattedTime = clockInfo.datetime
    ? clockInfo.datetime.substring(11, 16)
    : "";

  const getImageSrc = () => {
    if (greeting === "morning" || greeting === "afternoon") {
      setImageSrc("images/desktop/icon-sun.svg");
    } else {
      setImageSrc("images/desktop/icon-moon.svg");
    }
  };

  useEffect(() => {
    getImageSrc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="clock">
      <div className="clock__message">
        <img src={imageSrc} alt="" />
        <p className="greeting">
          Good {greeting}
          <span className="mobileHidden">, it is currently</span>
        </p>
      </div>
      <div className="clock__time">
        <h1>{formattedTime}</h1> <span>{clockInfo.abbreviation}</span>
      </div>
      <div className="clock__location">
        In {geoIpInfo.city}, {geoIpInfo.country_code2}
      </div>
    </div>
  );
}

export default Clock;
