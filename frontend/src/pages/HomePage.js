import React from "react";
import { useAuth } from "../context/auth";
import Layout from './../components/Layouts/Layout';

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;