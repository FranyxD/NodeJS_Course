const getPokemonById = require('./js-foundation/06-promises');
const  {buildLogger} = require('./plugins')

const logger = buildLogger('app.js');
logger.log('Hola mundo');

getPokemonById(2)
  .then((pokemon) => console.log(pokemon))
  .catch(error => console.error("Error aqui", error))
  .finally( () => console.log("Finally"))


