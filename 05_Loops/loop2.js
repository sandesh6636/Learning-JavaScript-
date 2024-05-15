// const myobj = {
//   js: "Javascript",
//   cpp: "C++",
//   php: "Php web",
// };
// console.log(myobj.js);
// for (const key in myobj) {
//   console.log(`${key} is shortcut of ${myobj[key]}`); // dont use the myobj.key because th js will search for myobj."key" in result gives undefined
// }

// const myArr = [45, 444, 22, 223];
// for (const key in myArr) {
//   //   console.log(key); //prints an  index
//   console.log(`Value at index ${key}  is ${myArr[key]}`);
// }

const map = new Map();
map.set("NP", "Nepal");
map.set("IN", "India");
for (const key in map) {
  console.log(key); //prints nothing because the Map is not irritable
}
