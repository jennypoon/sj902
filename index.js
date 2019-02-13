require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

//MAILGUN API
var api_key = process.env.MAILGUN_API;
var DOMAIN = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

//DATABASE
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[env]);

//-----------------//

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


//QUERY FOR RSVP
app.get('/api/rsvp', (req,res) => {
  knex('registration')
    .select('*')
    .asCallback((err, data) => {
      console.log("QUERY DONE")
      if (err) throw err;
      res.json(data);
    });
});

//SAVE RSVP
app.post('/api/rsvp', (req,res) => {
  knex('registration')
    .insert({
      name: req.body.name,
      email: req.body.email,
      plus_one: req.body.plusone,
      rsvp: req.body.rsvp,
      comments: req.body.comments,
      song_requests: req.body.songs
    })
    .then((data) => {

      var emailBody = {
        from: `Operation Penguin <postmaster@${process.env.MAILGUN_DOMAIN}>`,
        to: `${process.env.EMAIL}`,
        subject: `CHINESE WEDDING - ${req.body.name} has RSVP to your wedding`,
        text:
        `${req.body.name} (${req.body.email}) has RSVP to your Chinese Wedding!

          Here are the details:

          RSVP: ${req.body.rsvp === '1' ? (`Yes, coming!
          Total Seats Reserved: ${req.body.plusone}
          Guest Names: ${req.body.songs}
          Mailing Address:${req.body.comments}`) : "Sorry, can't make it" }

          For complete RSVP list, visit: https://sj2019.herokuapp.com/rsvp/admin`
      };

      mailgun.messages().send(emailBody, function (error, body) {
        console.log("Email sent to Jenny and Stephen");
      })

      res.json("RSP successfully saved in database")
    })
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`App listening on ${port}`);