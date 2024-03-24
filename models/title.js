import Mongoose, { Schema } from "mongoose";

const titleSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }

);

const Title = Mongoose.model('Title', titleSchema);

export default Title;