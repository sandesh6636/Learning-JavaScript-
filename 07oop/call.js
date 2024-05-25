function setUserName(username) {
  this.username = username;
  console.log("Called");
}

function createUser(username, age, id) {
  setUserName.call(this, username);
  this.age = age;
  this.id = id;
}
const user1 = new createUser("sandesh", 33, 8998);
console.log(user1);
