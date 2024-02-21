
import Layout from "../../components/Layouts/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";


import React, { useState } from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option
} from "@material-tailwind/react";
import { useDynamicTitle } from "../../hooks/useDynamicTitle";


function Login() {
  useDynamicTitle("Wellness Hub | Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      console.log(res);
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data))
        navigate("/dashboard");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Layout>
        <div className="flex justify-center h-[80vh] items-center">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" className="text-center" color="blue-gray">
              Login
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-center">
              Welcome Back!
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Username
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  onChange={(e) => setEmail(e.target.value)}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  onChange={(e) => setPassword(e.target.value)}
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              <Button className="mt-6" fullWidth
                onClick={handleSubmit}
              >
                Login
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Create an account ?{" "}
                <span className="font-normal cursor-pointer text-black"
                  onClick={() => {
                    navigate('/signup')
                  }}>Sign Up</span>
              </Typography>
            </form>
          </Card>
        </div>
      </Layout>
    </>

  );
}

export default Login;