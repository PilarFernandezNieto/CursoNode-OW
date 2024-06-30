const {sumar} = require("./operaciones.js");
const Persona = require("./persona.js");

const suma = sumar(4, 2);
console.log(suma);


const pers = new Persona("Pilar", "Fernández", "25");
console.log(pers.mostrar());