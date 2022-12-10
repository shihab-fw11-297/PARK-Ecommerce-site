const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const cors = require("cors");
  
//ssssss
dotenv.config();

mongoose
  .connect(process.env.mongo)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((errors) => {
    console.log(errors);
  });

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});