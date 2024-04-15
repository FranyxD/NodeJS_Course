"use strict";

// Importamos el módulo de sistema de archivos (fs) de Node.js.
const fs = require('fs');

// Leemos el contenido del archivo 'README.md' y lo guardamos en la variable `data`.
const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split(" ").length;

//Split devuelve un array con las palabras separadas por espacio
const words = content.split(" ");
const nodeWordCount = content.match(/Node/ig ?? []).length;

//console.log(wordCount);
console.log("words filtrado", words.filter(word => {
    //podriamos usar .includes() o .contains() 
    return word.toLowerCase() === "de";
}).length)

console.log("Palabras: ", wordCount);
console.log("Palabras Node: ", nodeWordCount);