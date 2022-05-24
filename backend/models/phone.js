const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  RAM: {
    type: String,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
  display: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  camera: {
    type: String,
    required: true,
  },
  battery: {
    type: String,
    require: true,
  },
  os: {
    type: String,
    require: true,
  },
  sensors: {
    type: String,
    require: true,
  },
  network: {
    type: String,
    require: true,
  },
  nfc: {
    type: String,
    require: true,
  },
  security: {
    type: String,
    require: true,
  },
  packagecontains: {
    type: String,
    require: true,
  },
  pic: {
    type: String,
    // require: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },

  image: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  creator: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Phone", phoneSchema);
