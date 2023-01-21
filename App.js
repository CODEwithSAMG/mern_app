const dotenv = require('dotenv')
const express = require('express');

const app = express();

dotenv.config({ path: './config.env' })
require('./db/conn')

const PORT = process.env.PORT

const middleware = (req, res, next) => {
  console.log("hello from middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("hello from home");
});

app.get("/about", middleware, (req, res) => {
  res.send("hello from about page");
});
app.get("/contact", (req, res) => {
  res.send("contact");
});
app.get("/signin", (req, res) => {
  res.send("signin");
});
app.get("/signup", (req, res) => {
  res.send("signup");
});

// let port = 8000

app.listen(PORT, () => {
  console.log(`surver is running on port ${PORT}`);
});
