const getAgePlugin = require('get-age');

export const getAge = (birthdate:number) => {  
  if(!birthdate) return new Error('Birthdate is required');

  return getAgePlugin(birthdate)
}
