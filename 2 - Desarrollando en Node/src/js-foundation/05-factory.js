"use strict";

const {getAge, getId} = require('../plugins');


const obj = { name: "John", birthdate: "2001-01-27" };

const buildPerson = ({ name, birthdate }) => {
  return {
    id: getId(),
    name: name,
    birthdate: birthdate,
    age: getAge(birthdate),
  };
};

const john = buildPerson(obj);

console.log(john)