const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONG0_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "You are welcome to E-Commerce API " });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});

