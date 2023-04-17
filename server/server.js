const express = require("express");
const app = express();
const connectDB = require("./db");
const messageRouter = require("./router")
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/v1/message" , messageRouter)

connectDB();

app.listen(8000 ,  console.log("Express server aslaa"));