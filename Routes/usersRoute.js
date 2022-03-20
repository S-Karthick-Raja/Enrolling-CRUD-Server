const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const User = require("../models/users");

const userRouter = express.Router();

//Create User
userRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const user = await User.create({
      fullname: req.body.fullname,
      profile: req.body.profile,
      mobile: req.body.mobile,
      email: req.body.email,
      jobtype: req.body.jobtype,
      dob: req.body.dob,
      location: req.body.location,
    });

    if (user) {
      res.status(200);
      res.json(user);
    } else {
      res.status(500);
      throw new Error("User creating failed");
    }
  })
);

//GET User
userRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const user = await User.find({});

    if (user) {
      res.status(200);
      res.json(user);
    } else {
      res.status(500);
      throw new Error("There are no users");
    }
  })
);

module.exports = userRouter;
