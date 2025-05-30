import { Schema, model } from "mongoose";

const requestSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref:'user',
    required: true,
  },
  category : {
    type : Schema.Types.ObjectId ,
    ref: "category" ,
    required : true 
  } ,
  bookName: {
    type: String,
    required: [true, 'Book Name must be required!'],
    maxLength: [60, "Book Name must be under 60 char"],
    trim: true,
  },
  authorName: {
    type: String,
    required: [true, 'Author Name must be required!'],
    maxLength: [100, "Author Name must be under 100 char"],
    trim: true,
  },
  status: {
    type: String,
    required: [true, 'Status must be provided!'],
    enum: {
      values: ["pending", "fulfilled", "rejected"],
      message: "Status must be one of the following: 'pending', 'fulfilled', or 'rejected'"
    },
    default: "pending", // optional: you can set a default value
  }
}, { timestamps: true });

export const requests = model("request", requestSchema);