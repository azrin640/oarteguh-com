const mongoose = require('mongoose');

// Make sure we are running node 7.6+
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.log('🛑 🌮 🐶 💪 💩\nHey You! \n\t ya you! \n\t\tBuster! \n\tYou\'re on an older version of node that doesn\'t support the latest and greatest things we are learning (Async + Await)! Please go to nodejs.org and download version 7.6 or greater. 👌\n ');
  process.exit();
}

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// READY?! Let's go!
// // Import db model
require('./server/models/User');
require('./server/models/Post');
require('./server/models/Comment');
require('./server/models/Like');

// Start our https server
const app = require('./app');
const fs = require('fs');
const https = require('https');

app.set('port', process.env.PORT || 7777);
const server = https.createServer({

   key: fs.readFileSync('./key.pem'),
   cert: fs.readFileSync('./cert.pem'),
   passphrase: process.env.SSL_SECRET
   
}, app).listen(app.get('port'), () => {

      console.log(`Express running → PORT ${server.address().port}`);

});

// Open ssl cert command
// openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365