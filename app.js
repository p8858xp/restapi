const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const postsRoute = require("./routes/posts");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//middleware are functions that are excuted everytimes routes are being hit
app.use(bodyParser.json());
app.use(cors());

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("we are on home");
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB!");
  }
);

//How we do start listening to the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
