import "../../styles/AuthStyles.css"

import React from 'react';

const FitnessComponents = () => {
    const currentDate = new Date().toLocaleDateString();

    const challenges = [
        "Complete 30 minutes of cardio",
        "Do 50 push-ups",
        "Run 5 kilometers",
        "Stretch for 15 minutes"
    ];

    return (
      <div className="fitness-challenges-container">
          <h1 className="title">Fitness Challenges for {currentDate}</h1>
          <ul className="challenge-list">
              {challenges.map((challenge, index) => (
                  <li key={index} className="challenge-item">{challenge}</li>
              ))}
          </ul>
      </div>
  );
};

export default FitnessComponents;
