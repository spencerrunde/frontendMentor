import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import React from "react";

const Game = ({ playerChoice, score, setScore }) => {
  //setting state
  const [computerChoice, setComputerChoice] = useState("");
  const [winState, setWinState] = useState("");
  const [computerWinState, setComputerWinState] = useState("");

  //function to randomly choose one of the five options
  const newComputerChoice = () => {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    setComputerChoice(choices[Math.floor(Math.random() * 5)]);
  };

  //functions to set winState and update score
  const playerWin = () => {
    setWinState("win");
    setComputerWinState("lose");
    setScore((score = score + 1));
  };

  const playerLoss = () => {
    setWinState("lose");
    setComputerWinState("win");
    setScore((score = score - 1));
  };

  const playerDraw = () => {
    setWinState("draw");
    setComputerWinState("draw");
    //score is unchanged in the event of a draw
  };

  //function to determine if the player wins or loses
  const newWinState = () => {
    // win/loss for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors" || computerChoice === "lizard") {
        playerWin();
      } else if (computerChoice === "paper" || computerChoice === "spock") {
        playerLoss();
      } else {
        playerDraw();
      }
      // win/loss for paper
    } else if (playerChoice === "paper") {
      if (computerChoice === "rock" || computerChoice === "spock") {
        playerWin();
      } else if (computerChoice === "scissors" || computerChoice === "lizard") {
        playerLoss();
      } else {
        playerDraw();
      }
      // win/loss for scissors
    } else if (playerChoice === "scissors") {
      if (computerChoice === "paper" || computerChoice === "lizard") {
        playerWin();
      } else if (computerChoice === "rock" || computerChoice === "spock") {
        playerLoss();
      } else {
        playerDraw();
      }
      // win/loss for lizard
    } else if (playerChoice === "lizard") {
      if (computerChoice === "spock" || computerChoice === "paper") {
        playerWin();
      } else if (computerChoice === "rock" || computerChoice === "scissors") {
        playerLoss();
      } else {
        playerDraw();
      }
      // win/loss for spock
    } else {
      if (computerChoice === "scissors" || computerChoice === "rock") {
        playerWin();
      } else if (computerChoice === "lizard" || computerChoice === "paper") {
        playerLoss();
      } else {
        playerDraw();
      }
    }
  };

  //generating new computer choice
  useEffect(() => {
    newComputerChoice();
  }, []);

  // setting winstate
  useEffect(() => {
    newWinState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computerChoice]);

  return (
    <div className="game">
      <div className="game__main">
        <div className="main__player">
          <div
            className={`${
              winState === "win"
                ? `icon icon--${playerChoice}--winner`
                : `icon icon--${playerChoice}`
            }`}
          >
            <img src={`images/icon-${playerChoice}.svg`} alt={playerChoice} />
          </div>
          <div className="choiceText">You picked</div>
        </div>
        <div className="main__computer">
          <div
            className={`${
              computerWinState === "win"
                ? `icon icon--${computerChoice}--winner`
                : `icon icon--${computerChoice}`
            }`}
          >
            <img
              src={`images/icon-${computerChoice}.svg`}
              alt={computerChoice}
            />
          </div>
          <div className="choiceText">The house picked</div>
        </div>
      </div>
      <div className="game__result">You {winState}</div>
      <Link to="/" onClick={() => setComputerChoice()}>
        <div className="game__playAgain">Play Again</div>
      </Link>
    </div>
  );
};

export default Game;
