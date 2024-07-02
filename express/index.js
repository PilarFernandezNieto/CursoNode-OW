const express = require("express");
require("dotenv").config();

const app = express();

// GET - http://localhost:3000/contactos
app.get("/contactos", (req, res) => {
    res.send("Lista de contactos");
});

app.post("/usuarios/nuevo", (req, res) => {
   res.send("Nuevo usuario");

});














const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});