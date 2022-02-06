import React, { useEffect, useState } from "react";

import Clock from "./components/Clock";
import MoreButton from "./components/MoreButton";
import MoreDetails from "./components/MoreDetails";
import Quotes from "./components/Quotes";

function App() {
  //setting state
  const [clockInfo, setClockInfo] = useState("");
  const [geoIpInfo, setGeoIpInfo] = useState("");
  const [greeting, setGreeting] = useState();
  const [isOpen, setIsOpen] = useState(false);

  //fetching clock info from api
  const getClockInfo = () => {
    let url = "https://worldtimeapi.org/api/ip";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setClockInfo(data);
      });
  };

  //fetching geolocation info from api
  const getGeoIpInfo = () => {
    let url = "https://ipwhois.app/json/";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGeoIpInfo(data);
      });
  };

  //toggles true/false on click
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  //pulls two digit hours value from clock data
  const hours = clockInfo ? clockInfo.datetime.substring(11, 13) : "";

  //determines morning, afternoon, or evening
  const getTimeOfDay = () => {
    if (hours >= 12 && hours < 18) {
      setGreeting("afternoon");
    } else if (hours >= 18 && hours <= 24) {
      setGreeting("evening");
    } else {
      setGreeting("morning");
    }
  };

  useEffect(() => {
    getClockInfo();
    getGeoIpInfo();
    getTimeOfDay();

    // fires every 20 seconds to ensure clock and time of day are accurate
    const updateClock = setInterval(() => {
      getClockInfo();
      getTimeOfDay();
    }, 20000);

    return () => {
      clearInterval(updateClock);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      className={greeting === "evening" ? "main main--night" : "main main--day"}
    >
      <div className="main__wrapper">
        <div className="outerWrapper">
          <Quotes isOpen={isOpen} />
          <div className="insideWrapper">
            <Clock
              clockInfo={clockInfo}
              geoIpInfo={geoIpInfo}
              greeting={greeting}
            />
            <MoreButton toggleOpen={toggleOpen} isOpen={isOpen} />
          </div>
        </div>
        <MoreDetails clockInfo={clockInfo} isOpen={isOpen} />
      </div>
    </main>
  );
}

export default App;
