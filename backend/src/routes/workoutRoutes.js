const express = require("express");
const {
  workoutGetAll,
  workoutGetById,
  workoutCreate,
  workoutUpdateById,
  workoutDeleteById,
} = require("../controllers/workoutControllers");

const workoutRouter = express.Router();

workoutRouter.get("/", workoutGetAll);
workoutRouter.get("/:id", workoutGetById);
workoutRouter.post("/", workoutCreate);
workoutRouter.put("/:id", workoutUpdateById);
workoutRouter.delete("/:id", workoutDeleteById);

module.exports = { workoutRouter };
