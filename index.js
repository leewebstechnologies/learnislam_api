import express from "express";

const app = express();

app.use(express.json()); //express json() so as to be able to send data to our DB.

app.listen(8800, () => {
  console.log("Connected to DB");
});
