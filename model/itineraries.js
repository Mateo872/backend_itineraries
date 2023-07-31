import { Schema, model } from "mongoose";

const itinerarySchema = new Schema({
  collaborator: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
    unique: true,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 200,
    unique: true,
    required: true,
  },
  imageOne: { type: String, required: true },
  imageTwo: { type: String, required: true },
  imageThree: { type: String, required: true },
  titleActivity: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 800,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    minLength: 0,
  },
  time: { type: String, required: true },
  idCity: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  likes: { type: Number, required: true },
  language: { type: String, required: true },
  years: { type: String, required: true },
  favorite: { type: Boolean, required: true },
  thingsToDoInCity: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 800,
    required: true,
  },
});

const Itinerary = model("itinerarie", itinerarySchema);

export default Itinerary;
