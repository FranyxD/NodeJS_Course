"use strict";
//usando {v4:uuidv4 estamos renombrando}
const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age');

const obj = { name: "John", birthdate: "2001-01-27" };

const buildPerson = ({ name, birthdate }) => {
  return {
    id: uuidv4(),
    name: name,
    birthdate: birthdate,
    age: getAge(birthdate),
  };
};

const john = buildPerson(obj);

console.log(john)