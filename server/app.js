import express from 'express';

// import data from './mock-data/index';
import checkToken from './middlewares/checkToken';

const _ = require('lodash');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

let MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test_shop';
const http = require('http');

const app = express();
const router = express.Router();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(router);
app.listen(port, () => console.log(`App listening on port ${port}!`));

const data = [
  {
    id: '1',
    username: 'User1',
    email: 'User1@mail.ru',
  },
  {
    id: '2',
    username: 'User2',
    email: 'User2@mail.ru',
  },
];

router
  .route('/auth')
  .post((req, res) => {
    MongoClient.connect(url, (err, db) => {
      if (err) return;
      const collection = db.collection('shop_users');
      const user = collection.find({ username: req.body.username });
    //  const user = _.find(data, { username: req.body.username });  
      console.log(user);  
      if (user === undefined || user.email !== req.body.email) {
        res.status(403).send({ succes: false, message: 'Bad username/password' });
      } else {
        const payload = { 'userName': user.username, 'userEmail': user.email };
        const token = jwt.sign(payload, 'secret', { expiresIn: 70 });
        res.send(token);
        db.close();
      }
    });

// const user = _.find(data, { username: req.body.username });
  });

router
  .route('/products')
  .get(checkToken, (req, res) => {
    console.log('hello');
    res.send('helll');
  });

