const fs = require("fs/promises");

// leer ficheros


async function accionFicheros(){
try {
    await fs.appendFile("../ficheros/COMANDOS LINUX.txt", "\n\nEste es un texto nuevo");
    const data = await fs.readFile("../ficheros/COMANDOS LINUX.txt", "utf-8");

    console.log(data);
} catch (error) {
    console.log(error)
}

}


accionFicheros();
