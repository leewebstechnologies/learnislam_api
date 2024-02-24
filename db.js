import mysql2 from "mysql2";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
export const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MySQL_PASSWORD,
  database: "learnislam",
});
