const fs = require("fs/promises");
const fsSync = require("fs");

// Ámbito de función
(async () => {
  try {
    if (!fsSync.existsSync("./config")) {
      await fs.mkdir("./config");
    } else {
      console.log("El directorio ya existe");
    }
    await fs.appendFile("./config/prueba.md", "Contenido del fichero");
  } catch (error) {
    console.log(error.message);
  }
})();
