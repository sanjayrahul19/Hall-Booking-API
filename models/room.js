const mongoose = require("mongoose");

const room = mongoose.model("rooms", {
  customer: [
    {
      type: mongoose.Types.ObjectId,
      ref: "customers",
    },
  ],
  roomNo: {
    type: Number,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  amenities: {
    tv: {
      type: Boolean,
      default: false,
    },
    wifi: {
      type: Boolean,
      default: false,
    },
    ac: {
      type: Boolean,
      default: false,
    },
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = room;
