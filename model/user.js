import { Schema, model } from "mongoose";

const userSchema = new Schema({
  image: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 200,
  },
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
  favorites: {
    type: [String],
    default: [],
  },
});

const User = model("user", userSchema);

export default User;
