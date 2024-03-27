import Mongoose, { Schema } from "mongoose";

const titleSchema = new Schema(
    {
       title:String,
       description:String,

    },
    {
        timestamps: true,
    }

);

const Title = Mongoose.models.Title || Mongoose.model('Title', titleSchema);

export default Title;