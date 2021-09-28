import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import storiesRouter from "./routes/stories.js";
import userRouter from "./routes/users.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "300mb", extended: true }));
app.use(express.urlencoded({ limit: "300mb", extended: true }));
app.use(cors());

app.use("/stories", storiesRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is running");
});

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () =>
      console.log(
        `Database connect established , Server running on port ${port}`
      )
    );
  })
  .catch((err) => console.log(`Error : ${err.message}`));

mongoose.set("useFindAndModify", false);
