// const {emailTemplate} = require('./js-foundation/01-template');
const {getAge, getId} = require('./plugins');

// require('./js-foundation/02-destructuring');
// require('./js-foundation/03-callbacks');
// const {getUserById} = require('./js-foundation/03-callbacks');
const { buildMakePerson } =  require('./js-foundation/05-factory');

const makePerson = buildMakePerson({getId, getAge})

const obj = { name: "John", birthdate: "2001-01-27" };
const john = makePerson( obj );

console.log(john);




// //console.log(emailTemplate);

// /* const id = 2;
// getUserById(id, (error, user) => {
//   if(error){
//     throw new Error(`USUARIO ${id} no encontrado`);
//   }
//   console.log({user});
// });
// */


