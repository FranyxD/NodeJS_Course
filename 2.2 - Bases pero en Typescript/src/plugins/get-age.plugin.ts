const getAgePlugin = require('get-age');

export const getAge = (birthdate:number) => {  
  return getAgePlugin(birthdate)
}
