// class user {
//   constructor(username, roll, grade) {
//     this.username = username;
//     this.roll = roll;
//     this.grade = grade;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
//   getName() {
//     return this.username;
//   }
// }

// const newUser = new user("Sandesh", 22, 22);
// console.log(newUser.changeUsername());
// console.log(newUser.getName());

//Behind the scene
function user(username, roll, age) {
  this.username = username;
  this.roll = roll;
  this.age;
}
user.prototype.getName = function () {
  return this.username;
};
const user2 = new user("Hello", 3, 3);
console.log(user2.getName());
