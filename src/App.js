import React, { useState } from "react";
import Confetti from "react-confetti";
import { ReactTyped } from "react-typed";
import BirthdayCard from "./BirthdayCard";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
      {!open ? (
        <div className="landing">
          <button className="btn" onClick={() => setOpen(true)}>
            🎁 Click for your Birthday Surprise
          </button>
        </div>
      ) : (
        <>
          <Confetti />

          <audio autoPlay loop>
            <source src="/birthdaySong.mp3" type="audio/mp3" />
          </audio>
          <BirthdayCard />
        

         
        </>
      )}
    </div>
  );
}

export default App;