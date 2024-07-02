var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    name: "Pilar",
    available: false,
    animales: ["pájaro", "perro", "gato", "elefante"]
  });
});

module.exports = router;
