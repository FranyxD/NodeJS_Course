const { v4: uuidv4 } = require("uuid");

const getId = () => {
  if (!uuidv4) {
    throw new Error("Error: uuidv4 function not found");
  }
  return uuidv4();
};

module.exports = {
    getId,
}