const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const userModel = require("../models/userModel");
const reviewModel = require("../models/reviewModel");
const userReviewmodel = require("../models/userReviewModel");
const userReviewModel = require("../models/userReviewModel");

const app = express();
app.use(cookieParser());

const signup = async (req, resp) => {
  console.log(req.body);
  try {
    if (!req.body.email || !req.body.password || !req.body.username) {
      throw new Error("Field is missing");
    }
    const user = await userModel.findOne({ username: req.body.username });
    const user1 = await userModel.findOne({ email: req.body.email });
    if (user) {
      resp.status(400).send({
        message: "You can't use this username",
      });
    } else if (user1) {
      resp.status(400).send({
        message: "Account of this email already exists",
      });
    } else {
      bcrypt.hash(req.body.password, 10, async function (err, hash) {
        let data = new userModel({
          username: req.body.username,
          email: req.body.email,
          password: hash,
        });
        let result = await data.save();
        try {
          jwt.sign(
            { data: result },
            process.env.ACCESS_SECRET_TOKEN,
            (err, token1) => {
              if (err) {
                throw err;
              } else {
                console.log("Inside cookie block");
                resp.cookie("token", token1, { path: "/" });
                console.log("TOKEN");
                console.log(token1);
                resp.redirect("/");
              }
            }
          );
        } catch (err) {
          console.error("Error signing JWT:", err);
          resp.status(500).send({
            message: "Internal server error",
          });
        }
      });
    }
  } catch (err) {
    console.log("Error signing in user:", err);
    resp.status(400).send({
      message: "Field is missing",
    });
  }
};

const login = async (req, resp) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error("Field is missing");
    }
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
      bcrypt.compare(
        req.body.password,
        user.password,
        async function (err, result) {
          if (result === true) {
            try {
              jwt.sign(
                { data: user },
                process.env.ACCESS_SECRET_TOKEN,
                (err, token1) => {
                  if (err) {
                    throw err;
                  } else {
                    resp.cookie("token", token1, { path: "/" });
                    console.log(`RESP COOKIE ${resp.cookie}`);
                    console.log(token1);
                    resp.redirect("/");
                  }
                }
              );
            } catch (err) {
              console.log("Error signing JWT:", err);
              resp.status(400).send({
                message: "Internal server error",
              });
            }
          } else {
            resp.status(400).send({
              message: "Password not matched",
            });
          }
        }
      );
    } else {
      resp.status(404).send({
        message: "User doesn't exist",
      });
    }
  } catch (err) {
    console.log("Error logging in user:", err);
    resp.status(400).send({
      message: "Field is Missing",
    });
  }
};

const postReview = async (req, resp) => {
  let id = req.params.id;
  console.log(id);
  // console.log(req.body);
  let data = new userReviewModel({
    userName: "User",
    userReview: req.body.postreview,
  });
  // console.log(data);
  let user = await reviewModel.findOne({ id: id });
  // console.log(user);
  let review = await reviewModel.updateOne(
    { id: id },
    { $push: { reviews: data } }
  );
  // console.log(review);
  resp.status(200).send({
    message: "Thanx for posting your review",
  });
};

module.exports = { signup, login, postReview };
