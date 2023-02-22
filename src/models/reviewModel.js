const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
  id: String,
  name: String,
  pictureUrl: String,
  plot: String,
  mainStars: Array,
  director: Array,
  writers: Array,
  genre: Array,
  reviews: Array,
});

module.exports = mongoose.model("reviews", reviewSchema);
