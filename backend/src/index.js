/* All Import */
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { workoutRouter } = require("./routes/workoutRoutes");
const morgan = require("morgan");
const { dbConnect } = require("./lib/dbConnect");

/* MiddleWare */
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(cookieParser());

/* Routers */

app.use("/api/workouts", workoutRouter);
/* App Start */
const appStart = async () => {
  try {
    dbConnect();
    app.listen(PORT, () => {
      console.log(`Server Runing on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("App Start Failed", error);
  }
};

appStart();
