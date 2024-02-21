import React from 'react';

const MeditationHistory = ({ meditationHistory }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Meditation History</h2>
      {meditationHistory.map((session, index) => (
        <div key={index} className="bg-gray-200 p-4 mb-2 rounded-md">
          Meditation Session: {session}
        </div>
      ))}
    </div>
  );
};

export default MeditationHistory;
