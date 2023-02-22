const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");

const route = require("./routes/main");
const reviewModel = require("./models/reviewModel");

const app = express();

app.use("", route);
app.use("/static", express.static("public"));
app.set("view engine", "hbs");
app.set("views", "views");

hbs.registerPartials("views/partials");

mongoose.connect("mongodb://localhost:27017/ratingHub", async () => {
  console.log("Database is connected");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
