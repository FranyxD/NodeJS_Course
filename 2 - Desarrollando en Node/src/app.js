const {emailTemplate} = require('./js-foundation/01-template');
require('./js-foundation/02-destructuring');
require('./js-foundation/03-callbacks');
const {getUserById} = require('./js-foundation/03-callbacks');

//console.log(emailTemplate);

const id = 2;
getUserById(id, function(error, user){
  if(error){
    throw new Error(`USUARIO ${id} no encontrado`);
  }

  console.log({user});
});