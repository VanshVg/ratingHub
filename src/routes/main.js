const express = require("express");

const controller = require("../controllers/controller");

const router = express.Router();

router.get("/", controller.homepage);
router.get("/movies", controller.moviepage);
router.get("/animes", controller.animepage);
router.get("/webseries", controller.webseriespage);
router.get("/sitcoms", controller.sitcomspage);
router.get("/games", controller.gamespage);
router.get("/review/:id", controller.reviewpage);
router.post("/add", controller.add);

module.exports = router;
