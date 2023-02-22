const express = require("express");

const reviewModel = require("../models/reviewModel");

const router = express.Router();

router.get("/", (req, resp) => {
  resp.render("index");
});

router.get("/movies", (req, resp) => {
  resp.render("movies");
});

router.get("/animes", (req, resp) => {
  resp.render("animes");
});

router.get("/webseries", (req, resp) => {
  resp.render("webseries");
});

router.get("/sitcoms", (req, resp) => {
  resp.render("sitcoms");
});

router.get("/games", (req, resp) => {
  resp.render("games");
});

router.get("/review", (req, resp) => {
  resp.render("review");
});

module.exports = router;
