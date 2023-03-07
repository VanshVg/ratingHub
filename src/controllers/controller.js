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

const add = async (req, resp) => {
  console.log("Req.Body------", req.body);
  let data = new reviewModel({
    id: req.body.id,
    name: req.body.name,
    pictureUrl: req.body.pictureUrl,
    plot: req.body.plot,
    mainStars: req.body.mainStars,
    director: req.body.director,
    writers: req.body.writers,
    genre: req.body.genre,
    reviews: req.body.reviews,
  });
  let result = await data.save();
  resp.status(200).send({ result });
  console.log({ result });
};

module.exports = {
  homepage,
  moviepage,
  animepage,
  webseriespage,
  sitcomspage,
  gamespage,
  reviewpage,
  add,
};
