import { Link } from "react-router-dom";
import React from "react";

//sets player choice when they click one of the buttons
const Play = ({ setPlayerChoice }) => {
  const newPlayerChoice = (e) => {
    setPlayerChoice(e.target.dataset.id);
  };

  return (
    <div className="play">
      <Link to="/game">
        <div
          data-id="rock"
          onClick={newPlayerChoice}
          className="icon icon--rock"
        >
          <img src="images/icon-rock.svg" alt="rock" data-id="rock" />
        </div>
      </Link>
      <Link to="/game">
        <div
          data-id="paper"
          onClick={newPlayerChoice}
          className="icon icon--paper"
        >
          <img src="images/icon-paper.svg" alt="paper" data-id="paper" />
        </div>
      </Link>
      <Link to="/game">
        <div
          data-id="scissors"
          onClick={newPlayerChoice}
          className="icon icon--scissors"
        >
          <img
            src="images/icon-scissors.svg"
            alt="scissors"
            data-id="scissors"
          />
        </div>
      </Link>
      <Link to="/game">
        <div
          data-id="lizard"
          onClick={newPlayerChoice}
          className="icon icon--lizard"
        >
          <img src="images/icon-lizard.svg" alt="lizard" data-id="lizard" />
        </div>
      </Link>
      <Link to="/game">
        <div
          data-id="spock"
          onClick={newPlayerChoice}
          className="icon icon--spock"
        >
          <img src="images/icon-spock.svg" alt="spock" data-id="spock" />
        </div>
      </Link>
    </div>
  );
};

export default Play;
