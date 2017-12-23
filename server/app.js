import express from 'express';
import users from './routes/users';

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/test_shop', {
  useMongoClient: true,
  keepAlive: 300000,
  connectTimeoutMS: 30000,
}, (err) => {
  if (err) {
    console.error(`MongoDB connection error: ' + ${err}`);
    process.exit(1);
  }
});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', users);

app.listen(port, () => console.log(`App listening on port ${port}!`));
