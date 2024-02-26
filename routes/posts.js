import express from "express";

const router = express.Router();

router.get("/learnislam", (req, res) => {
  res.json("This is post");
});

export default router;
