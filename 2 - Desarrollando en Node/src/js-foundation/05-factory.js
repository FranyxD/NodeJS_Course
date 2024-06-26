"use strict";

//onst {getAge, getId} = require('../plugins');


//const obj = { name: "John", birthdate: "2001-01-27" };

const buildMakePerson = ({getId, getAge}) => {
  return ({ name, birthdate }) => {

    return {
      id: getId(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
}



module.exports = {
  buildMakePerson,
}