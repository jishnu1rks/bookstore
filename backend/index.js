import express from "express";
import { PORT, DBUrl } from "./config.js";
import mongoose from "mongoose";
import router from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  res.status(234).send("Hello");
});

app.use("/books", router);

mongoose
  .connect(DBUrl)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
