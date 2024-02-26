import express from "express";
import postRoute from "./routes/posts.js";

const app = express();

app.use(express.json()); //express json() so as to be able to send data to our DB.
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Connected to DB");
});
