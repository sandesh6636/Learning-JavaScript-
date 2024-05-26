// class student {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   set name(value) {
//     this._name = value;
//   }
//   get name() {
//     return `${this._name} is studnet name`;
//   }
// }

// const std1 = new student("sandesh", "dan@gmail.com");
// console.log(std1.name);

//Another syntax property based
function Hero(name, age) {
  this._name = name;
  this._age = age;
  Object.defineProperty(this, "name", {
    set: function (value) {
      this._name = value;
    },
    get: function () {
      return `The name of the hero  is${this._name}`;
    },
  });

  Object.defineProperty(this, "age", {
    set: function (value) {
      this._age = value;
    },
    get: function () {
      return `The name of the hero  is ${this._age}`;
    },
  });
}
const hero1 = new Hero("Thor", 1000);
console.log(hero1.name);
