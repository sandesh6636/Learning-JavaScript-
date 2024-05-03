// singleton --> Object.create

// Object literals

//Symbol --> question wil asked like make a symbol a key and print the value
const mySmb = Symbol("key1");
const myUser = {
  name: "Sandesh",
  [mySmb]: "FirstSymbol1", // if the [] braces are not used then it will be string
  email: "Sandesh@gmail.com",
  number: 984914934,
  friends: ["Sandesh", "Kushal", "Hello"],
  "full name": "Sandesh Raiii",
};

// console.log(myUser.name);
// console.log(myUser["full name"]);
// console.log(myUser[mySmb]);

// myUser.name = "Kushal";
// Object.freeze(myUser); //it will freeze means that the can't updae the key
// myUser.name = "Helehr";

// console.log(myUser);

myUser.greating = function () {
  return `Hello javaScript user, ${this.name}`;
};

console.log(myUser.greating());
