const user = {
  username: "Sandesh",
  roll: 23,
  welcome: function () {
    console.log(`${this.username}, welcome to website `);
    console.log(this);
  },
};
// user.welcome();
// user.username = "Kushal";
// user.welcome();

// user.welcome();

// console.log(this);  //--> {} gives because we are using node  but in browser we get window object

// function test() {
//   let username = "Sandesh";
//   console.log(this.username); // gives undifined
// }
// test();

// const check = () => {
//   let user = "Sandeshhh";
//   console.log(this.user);  // this --> {}  ,, this.user --> undifined
// };

// check();

// const add = (num1, num2) => {
//   return num1 + num2;
// };

// const add = (num1, num2) => num1 + num2;
// const add = (num1, num2) => num1 + num2; // this concept(Implicit return ) is maninly used in react so remamber , here use () not {}
// console.log(add(5, 3));

const test = () => ({ userName: "Sandesh" }); //without {} returning object wil give undifined
console.log(test());
