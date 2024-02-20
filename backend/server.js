const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const userRoute = require("./routes/userRoutes")
const authRoute = require("./routes/authRoute")

//Rest object
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"))
app.use("/api/v1/auth", authRoute)
app.use("/user", userRoute)

//Rest Api
app.get("/", (req, res) => {
    res.send("Hello")
})

//Database Connection and Listening to Port
const PORT = process.env.PORT;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => { console.log(`sever is running on ${PORT}`)});
    })
    .catch((error) => { console.log(error) })