var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("Recupera todos los usuarios");
});
router.get("/edit", (req, res) => {
  res.send("Formulario para editar un formulario");
});

router.post("/update", (req, res) => {
  res.send("Gestión del formulario de edición");
});

module.exports = router;
