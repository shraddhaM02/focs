import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://focs:focs202324@focs.yh1gyo5.mongodb.net/focs?retryWrites=true&w=majority")

app.listen(3001, () => console.log("Server Started"));

