const mongoose = require("mongoose");

let userReviewSchema = new mongoose.Schema({
  userName: String,
  userReview: String,
});

module.exports = mongoose.model("userreviews", userReviewSchema);
