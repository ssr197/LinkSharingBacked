const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

//Get all user
router.get('/', async (req, res) => {
     try {
          const allUser = await User.find();
          res.send(allUser);
     } catch (err) {
          res.json({'message' : err})
     }
});

router.post('/', async (req, res) => {
     try {
          const {firstName, lastName, userName, dateOfBirth, email, password} = req.body;
          let user = {};
          user.firstName = firstName;
          user.lastName = lastName;
          user.userName = userName;
          user.dateOfBirth = dateOfBirth;
          user.email = email;
          user.password = password
          let userModel = new User(user);
          await userModel.save();
          res.json(userModel);
     } catch (err) {
          res.json({'message' : err});
     }
});

router.get('/:userId', async (req, res) => {
     try {
          let post = await User.findById(req.params.userId);
          res.json(post);
     } catch (err) {
          res.json({'message' : err})
     }
     
});

router.delete('/:userId', async (req, res) => {
     try {
          let post = await User.findByIdAndDelete(req.params.userId);
          res.json(post);
     } catch (err) {
          res.json({'message' : err})
     }
});

router.patch('/:userId', async (req, res) => {
     try {
          let updatedPost = await User.updateOne({_id : req.params.userId}, {$set:{password:req.body.password}});
          res.json(updatedPost);
     } catch (err) {
          res.json({'message' : err})
     }
});

module.exports = router;