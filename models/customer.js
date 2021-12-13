const mongoose = require("mongoose");

const customer = mongoose.model("customers", {
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  identity: {
    license: {
      type: String,
    },
    aadhar: {
      type: String,
    },
  },
  date: {
    type: Date,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  roomId: {
    type: mongoose.Types.ObjectId,
    ref: "rooms",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = customer;
