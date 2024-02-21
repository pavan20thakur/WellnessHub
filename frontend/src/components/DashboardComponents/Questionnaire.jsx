import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import ScorePopup from "./ScorePopup";

const Questionnaire = ({ onClose }) => {
  const [feeling, setFeeling] = useState("");
  const [stressLevel, setStressLevel] = useState("");
  const [sleepQuality, setSleepQuality] = useState("");
  const [exerciseFrequency, setExerciseFrequency] = useState("");
  const [nutrition, setNutrition] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [showScorePopup, setShowScorePopup] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmission = () => {
    // try {
    //   // Simulate the submission success (you can replace this with actual API calls)
    //   const submissionSuccess = true;
    //   if (submissionSuccess) {
    //     toast.success("Questionnaire responses saved successfully");
    //     // Conditionally redirect the user based on their selected feeling
    //     if (feeling === "happy") {
    //       navigate("/dashboard/fitness");
    //     } else {
    //       navigate("/dashboard/relax");
    //     }
    //   } else {
    //     toast.error("Error saving questionnaire responses");
    //   }
    //   onClose();
    // } catch (error) {
    //   // Handle errors
    //   console.error("Error submitting questionnaire:", error.message);
    // }

    try {
      // Calculate the score based on user's answers
      const sleepQualityScore = parseInt(sleepQuality);
      const exerciseFrequencyScore = parseInt(exerciseFrequency);
      const nutritionScore = calculateNutritionScore(nutrition);

      // Sum up the scores
      const totalScore =
        sleepQualityScore + exerciseFrequencyScore + nutritionScore;

      setScore(totalScore);
      setShowScorePopup(true);

      // Simulate the submission success (you can replace this with actual API calls)
      const submissionSuccess = true;

      if (submissionSuccess) {
        toast.success("Questionnaire responses saved successfully");
      } else {
        toast.error("Error saving questionnaire responses");
      }
      // onClose();
    } catch (error) {
      // Handle errors
      console.error("Error submitting questionnaire:", error.message);
    }
  };

  const calculateNutritionScore = (nutrition) => {
    switch (nutrition.toLowerCase()) {
      case "poor":
        return 1;
      case "average":
        return 2;
      case "good":
        return 3;
      case "excellent":
        return 4;
      default:
        return 0;
    }
  };

  const closeScorePopup = () => {
    navigate("/dashboard/home");
    setShowScorePopup(false);
    onClose();
  };

  return (
    <div className="questionnaire-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="questionnaire-container bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Mental Health Questionnaire</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            How are you feeling today?
          </label>
          <select
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={(e) => setFeeling(e.target.value)}
          >
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="anxious">Anxious</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            On a scale of 1 to 10, how would you rate your stress level?
          </label>
          <input
            type="number"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={(e) => setStressLevel(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            How would you rate the quality of your sleep? (1 to 10)
          </label>
          <input
            type="number"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={(e) => setSleepQuality(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            How often do you engage in physical exercise per week?
          </label>
          <input
            type="number"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={(e) => setExerciseFrequency(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            How would you describe your nutrition habits?
          </label>
          <select
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={(e) => setNutrition(e.target.value)}
          >
            <option value="poor">Poor</option>
            <option value="average">Average</option>
            <option value="good">Good</option>
            <option value="excellent">Excellent</option>
          </select>
        </div>

        <button
          onClick={handleSubmission} //Change the function call when backend is completely implemented
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Submit
        </button>

        {showScorePopup && (
          <ScorePopup score={score} onClose={closeScorePopup} />
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
