// Login.js
import React, { useContext, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDynamicTitle } from '../hooks/useDynamicTitle';

const GoogleAuthPage = () => {
  useDynamicTitle("Wellness Hub | Auth");
  // const { token, login } = useContext(AuthContext);
  const [token, setToken] = useState(null);

  const responseGoogle = (response) => {
    const newToken = response.accessToken;
    setToken(newToken)
    console.log(newToken);
  };

  return (
    <div>
      {token ? (
        <p>You are logged in.</p>
      ) : (
        <GoogleLogin
          clientId="608006389549-4gpjsnvvpqp8g75hhkp08ucbsjq109t6.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
};

export default GoogleAuthPage;
