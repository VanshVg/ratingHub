const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const route = require("./routes/main");
const reviewModel = require("./models/reviewModel");

const app = express();

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("", route);
app.use("/static", express.static("public"));
app.use(cookieParser());
app.set("view engine", "hbs");
app.set("views", "views");

hbs.registerPartials("views/partials");

mongoose.connect("mongodb://127.0.0.1:27017/ratingHub");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
