const express = require("express");
const router = express.Router();
const connection = require("../conf");

router.get("/", (req, res) => {
  const { max_year } = req.query;
  let sql = "SELECT * FROM videoGame WHERE year = ?";
  connection
    .promise()
    .query(sql, [max_year])
    .then(([results]) => {
      res.json(results);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving Video from Game center.");
    });
});

router.post("/", (req, res) => {
  const { name, year } = req.body;
  const sql = `INSERT INTO videoGame(name, year) VALUES (?, ?)`;

  connection.query(sql, [name, year], (err, result) => {
    err
      ? res.status(500).json({ errorMessage: err })
      : res.status(200).json(result);
  });
});

module.exports = router;
