const dotenv = require("dotenv")
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE;
const PORT = process.env.PORT

mongoose.connect(DB)
  .then(() => {
    console.log(`connection successfull`);
  })
  .catch((err) => {
    console.log(`no connection`);
  });

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
