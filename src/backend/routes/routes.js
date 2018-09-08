import http from 'http';
import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
const router = express.Router();
const app = express();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Initialize Passport

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

// Routes

module.exports = router;
