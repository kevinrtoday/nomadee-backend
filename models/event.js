const { model, Schema } = require("mongoose");

const EventSchema = Schema({
  title: {
    type: String,
    required: [true, "title field is required"],
  },
  date: {
    type: Number,
    required: [true, "date field is required"],
  },
  city: {
    type: String,
    required: [true, "city field is required"],
  },
  location: {
    type: String,
    required: [true, "location field is required"],
  },
  details: {
    type: String,
    required: [true, "description field is required"],
  },
  host: {
    type: String,
    ref: "host type",
  },

  img: { type: String },
});

module.exports = model("Events", EventSchema);
