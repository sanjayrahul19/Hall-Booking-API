const router = require("express").Router();
const Customer = require("../models/customer");
const Room = require("../models/room");

router.get("/", (req, res) => {
  res.send("Customer route is working");
});

router.post("/add", async (req, res) => {
  try {
    const customerData = {
      name: req.body.name,
      address: req.body.address,
      identity: req.body.identity,
      date: req.body.date,
      startTime: new Date(req.body.startTime),
      endTime: new Date(req.body.endTime),
      roomId: req.body.roomId,
      createdAt: req.body.createdAt,
    };
    const data = await Customer.create(customerData);
    const roomData = await Room.findByIdAndUpdate(
      { _id: data.roomId },
      { $push: { customer: data._id } },
      {
        new: true,
      }
    );
    res.json({ customer: data, room: roomData });
  } catch (err) {
    res.json({ msg: "Hall cannot be booked, Kindly choose different date." });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Customer.find({})
      .populate("roomId", "-_id -customer")
      .select("-_id");
    res.json(data);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

module.exports = router;
