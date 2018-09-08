import http from 'http';
import express from 'express';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import bodyParser from 'body-parser';

const app = express();
const routes = require('./routes/routes');
// const auth = require('./routes/auth');

// Initialize Passport

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/', auth(passport));
app.use('/', routes);

// Initialize Mongoose
mongoose.connection.on('connected', () => {
  console.log('connected to mongoDB');
});
mongoose.connect(process.env.MONGODB_URI);

module.exports = app;

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/')
