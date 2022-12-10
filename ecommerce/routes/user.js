const User = require("../models/User");
const router = require('express').Router();

router.post("/register", async (req, res) => {
    const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.password,
        address: req.body.address
      });
    
      try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router