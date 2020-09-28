require('dotenv').config();
const express = require('express'),
  mongoose = require('mongoose'),
  serveStatic = require('serve-static'),
  path = require('path'),
  cors = require('cors'),
  app = express(),
  eventRouter = require('./routes/event');

app.use(express.json());
app.use(cors());
app.use('/', serveStatic(path.join(__dirname, '../dist')));
app.use('/event', eventRouter);


const port = process.env.PORT || 8080;

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tixu4.mongodb.net/meetup?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`Connected to mongoDB`);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch((error) => {
    console.log(`Error connecting to the database + ${error}`);
  });
