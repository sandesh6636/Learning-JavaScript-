//for of loops mainly array based loop

const arr = [1, 11, 3, 33];
for (const num of arr) {
  //   console.log(num);
}

// const name = "sandesh rai";
// for (const letter of name) {
//   if (!letter == " ") {
//     console.log(`Letter of name is ${letter}`);
//   }
//   continue;
// }

const map = new Map();
map.set("NP", "Nepal");
map.set("NP", "Nepal"); //stores only unique value
map.set("IN", "India");
// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, "= ", value);
}

// const testObj = {
//   name: "Sandesh",
//   class: 11,
// };
// for (const iterator of testObj) {
//   console.log(iterator); //dont work for object
// }
