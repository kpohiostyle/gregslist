import HouseSchema from "../models/House"
import CarSchema from "../models/Car"
import JobSchema from "../models/Job"
import mongoose from "mongoose";

class DbContext {
  Houses = mongoose.model("House", HouseSchema)
  Cars = mongoose.model("Car", CarSchema)
  Jobs = mongoose.model("Job", JobSchema)
}

export const dbContext = new DbContext();
