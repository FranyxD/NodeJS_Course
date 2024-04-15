// Importamos el módulo de sistema de archivos (fs) de Node.js.
const fs = require('fs');

// Leemos el contenido del archivo 'README.md' y lo guardamos en la variable `data`.
const data = fs.readFileSync('README.md', 'utf-8');

// Creamos una nueva variable `newData` que contiene el contenido de `data` pero con todas las apariciones de la palabra "Node" reemplazadas por "Leche".
const newData = data.replace(/Node/ig, "Leche");

// Imprimimos el contenido original del archivo 'README.md' en la consola.
console.log(data);

// Escribimos el contenido de `newData` en un nuevo archivo llamado "README-LECHE.md".
fs.writeFileSync("README-LECHE.md", newData);