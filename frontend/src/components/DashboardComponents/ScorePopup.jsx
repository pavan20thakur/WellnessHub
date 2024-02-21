// ScorePopup.js

import React from "react";

const ScorePopup = ({ score, onClose }) => {
  let message = "";

  if (score < 9) {
    message = (
      <>
        <p>Your mental health needs attention!!</p>
        
        <p>
            Consider Surfing through our website
        </p>
      </>
    );
  } else if (score >= 9 && score < 14) {
    message = "Your mental health is in a moderate range. Consider self-care practices.";
  } else {
    message = "Your mental health is in good shape. Keep it up!";
  }

  return (
    <div className="score-popup fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="score-container bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Your Score</h2>
        <p>Your score is: {score}</p>
        {message}
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ScorePopup;
