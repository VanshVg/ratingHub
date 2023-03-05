const reviewModel = require("../models/reviewModel");

const homepage = (req, resp) => {
  resp.render("index");
};

const moviepage = (req, resp) => {
  resp.render("movies");
};

const animepage = (req, resp) => {
  resp.render("animes");
};

const webseriespage = (req, resp) => {
  resp.render("webseries");
};

const sitcomspage = (req, resp) => {
  resp.render("sitcoms");
};

const gamespage = (req, resp) => {
  resp.render("games");
};

const reviewpage = async (req, resp) => {
  let Id = req.params.id;
  let review = await reviewModel.findOne({ id: Id });
  console.log(review);
  resp.render("review", {
    review: review,
  });
};

module.exports = {
  homepage,
  moviepage,
  animepage,
  webseriespage,
  sitcomspage,
  gamespage,
  reviewpage,
};
