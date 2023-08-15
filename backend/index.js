require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const app = express();
const errorHandler = require('./middleware/ErrorHandleMiddleware')

const port = process.env.PORT || 5000;

const mongoose = require('mongoose');
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json());
app.use('/api', routes);

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});