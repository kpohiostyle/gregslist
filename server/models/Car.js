import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
    {
        make: { type: String, required: true },
        model: { type: String, required: true },
        year: { type: String, required: true },
        price: { type: Number, required: true },
        imgUrl: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true, toJSON: { virtuals: true } }
);
export default Car;
