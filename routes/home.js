const express = require("express");
const router = express.Router();
const connection = require("../conf");

router.get("/", (req, res) => {
  const sql = `SELECT * FROM videoGame`;
  connection.query(sql, (err, result) => {
    err
      ? res.status(500).json({ errorMessage: err })
      : res.status(200).json(result);
  });
});

module.exports = router;
