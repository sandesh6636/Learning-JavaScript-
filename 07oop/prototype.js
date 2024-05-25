const myArray = ["sandesh", "Rai"];
const myObj = {
  superPower: "smarttt",
  hello: function () {
    console.log(`Hello ${this.superPower}`);
  },
};

Object.prototype.sun = function () {
  console.log("Sun is avaliable to thiss ");
};

myArray.sun();
myObj.sun();
Array.prototype.powerForArray = function () {
  console.log("FORRRRR ARRAYY");
};

myArray.powerForArray();

const user = {
  username: "Sandesh",
  id: 123,
};
const student = {
  school: "Shivapuri ",
  __proto__: user,
};
const worker = {
  working: "full Time",
};
console.log(student.username);
// worker.__proto__ = user; // old syntax

//morder syntax
Object.setPrototypeOf(worker, user); //user ko property inherit to worker

//string
let superHero = "SuperMan   ";
String.prototype.trueString = function () {
  console.log(this);
  console.log(`True string is ${this.trim().length}`);
};
superHero.trueString();
