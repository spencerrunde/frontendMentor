import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Play from "./components/Play";
import { useState } from "react";

function App() {
  //setting state
  const [playerChoice, setPlayerChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <Header score={score} />
      <main>
        {/* using router to switch between choice and results screen */}
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Play setPlayerChoice={setPlayerChoice} />}
            />
            <Route
              path="/game"
              element={
                <Game
                  playerChoice={playerChoice || "rock"}
                  score={score}
                  setScore={setScore}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}

export default App;
