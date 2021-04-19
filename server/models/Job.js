import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
    {
        description: { type: String, required: true },
        title: { type: String, required: true },
        payRate: { type: Number, required: true },
        price: { type: Number, required: true },
        hours: { type: Number, required: true, default: '//placehold.it/300x300' },
        company: { type: String, minLength: 3 }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);
// timestamps adds createdAt and updatedAt
// virtuals adds the id instead of just _id

export default Job;