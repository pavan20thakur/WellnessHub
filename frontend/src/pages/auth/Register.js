// import React, { useState } from "react";
// import Layout from "../../components/Layouts/Layout";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
// import { useDynamicTitle } from "../../hooks/useDynamicTitle";

// const Register = () => {
//   useDynamicTitle("Wellness Hub | Register");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const navigate = useNavigate();

//   // form function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/v1/auth/register", {
//         name,
//         email,
//         password,
//         phone,
//       });

//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message);
//         navigate("/login");
//       } else {
//         toast.error(res.data.message);
//       }
      
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <Layout title="Register - Ecommer App">
//       <div className="form-container ">
//         <form onSubmit={handleSubmit}>
//           <h4 className="title">REGISTER FORM</h4>
//           <div className="mb-3">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Name"
//               required
//               autoFocus
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Email "
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Enter Your Password"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Phone"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             REGISTER
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Register;


import React, { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // { name, email, password }

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };


  return (
      <div className="flex justify-center h-[100vh] items-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" className="text-center" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal text-center">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="Eg. John"
                value={name}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                onChange={(e) => setName(e.target.value)}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Username
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                value={email}
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
                value={password}
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                onChange={(e) => setPassword(e.target.value)}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" fullWidth
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <span className="font-normal cursor-pointer text-black"
                onClick={() => {
                  navigate('/login')
                }}>Login</span>
            </Typography>
          </form>
        </Card>
      </div>
  );
};


export default Register;






