const { Schema, model, trusted } = require("mongoose");

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  maxNumberOfParticipants: {
    type: Number,
    required: true,
  },
  minNumberOfParticipants: {
    type: Number,
    required: true,
  },
  minAgeRequirement: {
    type: Number,
    required: true,
    default: 5,
  },
  successRate: {
    type: Number,
    required: false,
    trim: true,
  },
  imageLocation: {
    type: String,
    required: true,
  },
  typeId: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true
  }
});

const Room = model("Room", roomSchema);

module.exports = Room;
