import React, { useEffect, useState } from "react";

function Quotes({ isOpen }) {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    let url = "https://programming-quotes-api.herokuapp.com/quotes/random";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuote(data);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className={isOpen ? "quotes quotes--closed" : "quotes quotes--open"}>
      <button className="quotes__refresh" onClick={getQuote}>
        <img src="images/desktop/icon-refresh.svg" alt="refresh icon" />
      </button>
      <p className="quotes__text">{quote.en}</p>
      <p className="quotes__author">{quote.author}</p>
    </div>
  );
}

export default Quotes;
