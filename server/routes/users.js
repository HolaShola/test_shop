import checkToken from '../middlewares/checkToken';

const _ = require('lodash');
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = require('../models/userSchema');

router
  .route('/users')
  .get((req, res) => {
    User.find((err, users) => {
      if (err) res.status(500).send(err);
      res.status(200).send(users);
    });
  })
  .post((req, res) => {
    User.find((err, users) => {
      if (err) res.status(500).send(err);
      console.log(req.body.username);
      const user = _.find(users, { username: req.body.username });

      if (user === undefined || user.email !== req.body.email) {
        res.status(403).send({ succes: false, message: 'Bad username/password' });
      } else {
        const payload = { 'userName': user.username, 'userEmail': user.email };
        const token = jwt.sign(payload, 'secret', { expiresIn: 70 });
        console.log(payload);
        console.log(token);
        res.send(token);
      }
    });
  });

router
  .route('/products')
  .get(checkToken, (req, res) => {
    console.log('hello');
    res.send('helll');
  });

module.exports = router;