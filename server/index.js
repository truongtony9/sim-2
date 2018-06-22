require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");

const app = express();

const hc = require("./controllers/houser_controller");

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000
    }
  })
);

app.get("/api/test", (req, res, next) => {
  res.sendStatus(200);
});

app.get("/api/houses", hc.getHouses);
app.post("/api/houses", hc.addHouse);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`The server is listening at ${port}`);
});
