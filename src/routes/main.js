const express = require("express");

const controller = require("../controllers/controller");
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", controller.homepage);
router.get("/movies", controller.moviepage);
router.get("/animes", controller.animepage);
router.get("/webseries", controller.webseriespage);
router.get("/sitcoms", controller.sitcomspage);
router.get("/games", controller.gamespage);
router.get("/review/:id", controller.reviewpage);
router.post("/add", controller.add);
router.get("/user/signup", controller.signupPage);
router.post("/user/signup", userController.signup);
router.get("/user/login", controller.loginPage);
router.post("/user/login", userController.login);
router.post("/review/:id", userController.postReview);

module.exports = router;
