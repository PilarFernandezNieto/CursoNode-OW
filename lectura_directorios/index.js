const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface(process.stdin, process.stdout);
rl.question("¿Cómo te llamas?", (answer) => {
   const stream = fs.createWriteStream(`./${answer}.md`);
   
   rl.setPrompt("¿Qué quieres decir? (exit si quieres salir)");
   rl.prompt();

    rl.on("line", (data) => {
        if(data.toLowerCase().trim() === "exit"){
            stream.close();
            rl.close();
        } else {
            stream.write(`${data}\n`);
            rl.prompt();
        }
    });
});

rl.on("close", () => {
    console.log("Se termina la escritura");
})