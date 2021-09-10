require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const routes = require("./controllers");

// Port setup
const PORT = process.env.PORT || 8900;

// Session setup
const sess = {
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: {},
};
app.use(session(sess));

// Static setup
app.use(express.static(path.join(__dirname, "public")));

// Inputs setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes setup
app.use(routes);

app.listen(PORT, () => {
	console.log(`Now listening on ${PORT}`);
});
