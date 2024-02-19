import React from "react";
import { useAuth } from "../context/auth";
import Layout from './../components/Layouts/Layout';

const HomePage = () => {
  const [auth, setAuth] = useAuth();

  // Placeholder data for mental and physical health information
  const mentalHealthInfo = "Explore mindfulness exercises and mental health tools/games to boost your well-being.";
  const physicalHealthInfo = "Discover personalized fitness plans and exciting challenges to keep yourself active and healthy.";

  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to Your Wellness Hub</h1>
        <p>{mentalHealthInfo}</p>
        <p>{physicalHealthInfo}</p>

        {/* Login and Signup buttons */}
        {!auth.isAuthenticated && (
          <div>
            <button onClick={() => {/* handle login */}}>Login</button>
            <button onClick={() => {/* handle signup */}}>Sign Up</button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
