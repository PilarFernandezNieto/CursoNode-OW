var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  const { page = 1, limit = 3 } = req.query;
  console.log(page, limit);
  console.log("Current Date", req.currentDate);

  res.send("Recuperamos todos los productos");
});
router.get("/new", (req, res) => {
  res.json({"id": 1, "producto": "Teclado"});
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Recupero el producto con el id ${id}`);
});

router.post("/create", (req, res) => {
  console.log(req.body);
  res.send("Gestión de los datos del formulario");
});

module.exports = router;
