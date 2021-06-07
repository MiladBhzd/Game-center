const express = require("express");
const app = express();
const port = process.env.PORT || 4040;
const gamesRouter = require("./routes/games");
const homeRouter = require("./routes/home");

const morgan = require("morgan");
const connection = require("./conf.js");

// My middleware
app.use(morgan("dev"));
app.use(express.json()); // use applique sur toute l'application
app.use(express.urlencoded({ extended: false }));

// My Routes
app.use("/", homeRouter);
app.use("/games", gamesRouter);

// Connection
connection.connect((err) => {
  if (err) {
    console.error("error connecting to db");
  } else {
    console.log("connected to db");
  }
});

//Launching Server
app.listen(port, (err) => {
  if (err) {
    throw new Error("Somthing is happend");
  }
  console.log(`server is listening on port ${port}`);
});
