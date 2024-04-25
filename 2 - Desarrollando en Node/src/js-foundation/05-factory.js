const obj = { name: "John", birthdate: "2001-01-27" };

const buildPerson = ({ name, birthdate }) => {
  return {
    id: new Date().getTime(),
    name: name,
    birthdate: birthdate,
    age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
  };
};

const john = buildPerson(obj);

console.log(john)