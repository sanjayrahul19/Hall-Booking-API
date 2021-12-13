const router = require("express").Router();
const res = require("express/lib/response");
const Room = require("../models/room");

router.get("/", (req, res) => {
  res.send("Room route is working");
});

router.post("/add", async (req, res) => {
  try {
    const data = await Room.create(req.body);
    res.json(data);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Room.find({})
      .populate("customer", "-_id")
      .select("-_id");
    res.json(data);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

module.exports = router;
