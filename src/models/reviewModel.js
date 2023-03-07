const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subSchema = new Schema({
  name: String,
});

const userSchema = new Schema({
  userName: String,
  userReview: String,
});

const reviewSchema = new Schema({
  id: String,
  name: String,
  pictureUrl: String,
  plot: String,
  mainStars: [subSchema],
  director: [subSchema],
  writers: [subSchema],
  genre: [subSchema],
  reviews: [userSchema],
});

module.exports = mongoose.model("datas", reviewSchema);
