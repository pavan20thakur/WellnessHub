import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Questionnaire = ({ onClose }) => {
  const [feeling, setFeeling] = useState("");
  const [stressLevel, setStressLevel] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const handleSubmission = async () => {
    try {
      // Make an HTTP POST request to your server to save the questionnaire data
      const res = await axios.post(
        "http://localhost:8080/user/submit-questionnaire",
        {
          feeling,
          stressLevel,
        }
      );
      console.log(auth);
      console.log(res.data);
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/dashboard/home");
      } else {
        toast.error(res.data.message);
      }
      onClose();
    } catch (error) {
      // Handle errors
      console.error("Error submitting questionnaire:", error.message);
    }
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

        <button
          onClick={onClose} //Change the function call when backend is completely implemented
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
