const users = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id:1,
    name: "laur jae"
  }
];

function getUserById( id ){

  const user = users.find(function (user){
    return user.id === id;
  })

  //console.log({user:user})

}

module.exports = {getUserById}