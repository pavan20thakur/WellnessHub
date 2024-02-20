import React, { useState, useEffect } from 'react';

const Stopwatch = ({ onMeditationComplete }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  const handleSaveMeditation = () => {
    onMeditationComplete(formatTime(seconds));
    handleReset();
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Meditation Timer</h2>
      <div className="stopwatch-display text-4xl font-bold mb-4">
        {formatTime(seconds)}
      </div>
      <div className="stopwatch-controls">
        <button
          onClick={handleStartStop}
          className={`${
            isRunning ? 'bg-red-500' : 'bg-green-500'
          } hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2`}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Reset
        </button>
        <button
          onClick={handleSaveMeditation}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={seconds === 0 || isRunning}
        >
          Save Session Time
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
