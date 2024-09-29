const { Workout } = require("../models/Workout");
const mongoose = require("mongoose");

exports.workoutGetAll = async (req, res) => {
  try {
    const allWorkout = await Workout.find({}).sort({ createdAt: -1 });
    return res.json({ workouts: allWorkout });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
exports.workoutGetById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No Such Workout" });
    }
    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).json({ message: "No Such Workout" });
    }
    return res.status(200).json({ workout });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
exports.workoutCreate = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    return res.status(201).json({ workout });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
exports.workoutUpdateById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No Such Workout" });
    }
    const workout = await Workout.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );

    return res.status(200).json({ workout });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
exports.workoutDeleteById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No Such Workout" });
    }
    const workout = await Workout.findOneAndDelete({ _id: id });
    if (!workout) {
      return res.status(404).json({ message: "No Such Workout" });
    }
    res.status(200).json({ message: "Deleted", workout });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
