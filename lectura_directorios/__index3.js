const fs = require("fs");

const stream = fs.createReadStream("../ficheros/ESTATUTOS ASOCIACION MUSICOS DE OVIEDO - PRUEBA2.doc", "utf-8");
let body = "";

stream.once("data", () => {
    console.log("Empieza la lectura");
})

stream.on("data", chunk => {
    //console.log("Recibo datos...");
    body += chunk;
});
stream.on("end", () => {
    console.log(`Body: ${body.length}`);
})