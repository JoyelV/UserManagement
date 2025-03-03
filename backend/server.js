require('dotenv').config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Error connecting MongoDB: ", err));

const express = require("express");
const cors = require("cors");
const path = require("path")
const userRoute = require("./Routes/userRoute");
const adminRoute = require("./Routes/adminRoute");


const app = express();
app.use(cors());

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/user",userRoute);
app.use("/admin",adminRoute);


app.listen(5000,()=>{console.log("Server running successfully")})