require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);

const port = 3000;

mongoose.connect(process.env.DATABASE_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
const db  = mongoose.connection;

db.on('error', (err) => {
  console.log(err)
});
db.once('open', () => {
  console.log('Database connected')
});

app.use(express.json());

app.listen(port, () => console.log(`Server listening on port: ${port}`));
