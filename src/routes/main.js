const express = require("express");

const reviewModel = require("../models/reviewModel");
const controller = require("../controllers/controller");

const router = express.Router();

router.get("/", controller.homepage);
router.get("/movies", controller.moviepage);
router.get("/animes", controller.animepage);
router.get("/webseries", controller.webseriespage);
router.get("/sitcoms", controller.sitcomspage);
router.get("/games", controller.gamespage);
router.get("/review/:id", controller.reviewpage);

module.exports = router;
