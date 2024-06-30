const fs = require("fs");
const fsPromise = require("fs/promises")

// Síncrona
const aFiles = fs.readdirSync("../ficheros")
console.log("SYNC", aFiles);

// Asíncrona con callback
fs.readdir("../ficheros", (error, aFiles) => {
    console.log(error);
    console.log("ASYNC", aFiles);
})

// Asíncrona con promesas
fsPromise.readdir("../ficheros")
    .then(aFiles => console.log("Promise", aFiles))
    .catch(error => console.log(error));

// Async - Await
(async () =>{
    const filesP = await fsPromise.readdir("../ficheros");
    console.log("Async-await", filesP);
})();

