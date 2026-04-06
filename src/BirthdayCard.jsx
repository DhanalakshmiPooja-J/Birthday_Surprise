import React from "react";
import "./BirthdayCard.css";

function BirthdayCard() {
  return (
    <div className="card">
      
      {/* LEFT IMAGE */}
      {/* <div className="left">
        <img src="/cake.jpg" alt="cake" />
      </div> */}

      {/* RIGHT CONTENT */}
      <div className="center">
        <div className="tag">✨ IT'S YOUR SPECIAL DAY ✨</div>

        <h1 className="title">
          Happy Birthday <br />
          <span>Vishwa!</span>
        </h1>

        <p className="message">
          Wishing you a day filled with joy, laughter, and all the things that
          make you smile. May this year bring you endless happiness and all your
          dreams come true!
        </p>

        <div className="hearts">❤️ ❤️ ❤️</div>

        <p className="signature">With Love & Best Wishes</p>

        <p className="footer">✨ Have an Amazing Year! ✨</p>

      </div>
    </div>
  );
}

export default BirthdayCard;