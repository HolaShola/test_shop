import checkToken from '../middlewares/checkToken';

const express = require('express');

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
    User.find({}, (err, users) => {
      if (err) return console.error(err);
      console.log(users);
    });
    res.send('gg');
  });

 // db.close();
      
//  response.writeHead(200, {"Content-Type": "text/html"});
//  response.end('fh');  
  // MongoClient.connect(url, (err, db) => {
  //   if (err) return;
  //   const collection = db.collection('shop_users');
  //   const user = collection.find({ 'username': req.body.username });
 //   const user = _.find(data, { username: req.body.username });  
    
  //   if (user === undefined || user.email !== req.body.email) {
  //     res.status(403).send({ succes: false, message: 'Bad username/password' });
  //   } else {
  //     const payload = { 'userName': user.username, 'userEmail': user.email };
  //     const token = jwt.sign(payload, 'secret', { expiresIn: 70 });
  //     res.send(token);
  // //    db.close();
  //   }
  //    res.send('fff')

//});

//  });

router
.route('/products')
.get(checkToken, (req, res) => {
  console.log('hello');
  res.send('helll');
});

module.exports = router;