const {http} = require('../plugins');

const getPokemonById = async(id, callback) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await http.get( url );


  // const response = await fetch( url );
  // const pokemon = await response.json();

  //throw new Error("Pokemon no existe")

  return pokemon.name;
};

module.exports = getPokemonById;
