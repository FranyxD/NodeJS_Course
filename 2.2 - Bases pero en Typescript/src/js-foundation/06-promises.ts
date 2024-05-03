const {http} = require('../plugins');

export const getPokemonNameById = async(id: string|number):Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await http.get( url );
  
  
  // const response = await fetch( url );
  // const pokemon = await response.json();
  
  //throw new Error("Pokemon no existe")

  return pokemon.name;
};
