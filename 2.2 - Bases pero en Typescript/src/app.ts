// const {emailTemplate} = require('./js-foundation/01-template');
//const {getAge, getId} = require('./plugins');

import { buildLogger } from "./plugins/logger.plugin";

// require('./js-foundation/02-destructuring');
// require('./js-foundation/03-callbacks');
// const {getUserById} = require('./js-foundation/03-callbacks');

/*
const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(2)
  .then((pokemon) => console.log(pokemon))
  .catch(error => console.error("Error aqui", error))
  .finally( () => console.log("Finally"))

*/
const logger = buildLogger('app.js');
logger.log('Hola mundo');
logger.error('Esto es algo malo')


// //console.log(emailTemplate);

/* const id = 2;
// getUserById(id, (error, user) => {
//   if(error){
//     throw new Error(`USUARIO ${id} no encontrado`);
//   }
//   console.log({user});
// });


// ! referencia a factory functions y uso
const { buildMakePerson } =  require('./js-foundation/05-factory');

const makePerson = buildMakePerson({getId, getAge})

const obj = { name: "John", birthdate: "2001-01-27" };
const john = makePerson( obj );

console.log(john);
 */


