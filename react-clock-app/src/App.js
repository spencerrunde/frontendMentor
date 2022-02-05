import React, { useEffect, useState } from "react";

import Clock from "./components/Clock";
import MoreButton from "./components/MoreButton";
import MoreDetails from "./components/MoreDetails";
import Quotes from "./components/Quotes";

function App() {
  const [clockInfo, setClockInfo] = useState("");
  const [geoIpInfo, setGeoIpInfo] = useState("");
  const [greeting, setGreeting] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const getClockInfo = () => {
    let url = "http://worldtimeapi.org/api/ip";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setClockInfo(data);
      });
  };

  const getGeoIpInfo = () => {
    let url =
      "https://api.ipgeolocation.io/ipgeo?apiKey=234f23e6e9714dde837a72a6af101ae3";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGeoIpInfo(data);
      });
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const hours = clockInfo ? clockInfo.datetime.substring(11, 16) : "";

  const getTimeOfDay = () => {
    if (hours >= 5 && hours < 12) {
      setGreeting("morning");
    } else if (hours >= 12 && hours < 18) {
      setGreeting("afternoon");
    } else {
      setGreeting("evening");
    }
  };

  useEffect(() => {
    getClockInfo();
    getGeoIpInfo();
    getTimeOfDay();

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
