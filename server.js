const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoDB = require("./config/db");
const roomRouter = require("./routes/room");
const customerRouter = require("./routes/customer");

app.use(express.json());
app.use("/room", roomRouter);
app.use("/customer", customerRouter);
mongoDB();

app.get("/", (req, res) => {
  res.send("Its working");
});

app.listen(PORT, () => {
  console.log("Server is up and running");
});
