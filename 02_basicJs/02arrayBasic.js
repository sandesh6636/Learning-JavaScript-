const mySathi = ["me", "myself", "sandesh"];
const hisSathi = ["him", "himself", "kushal"];

// mySathi.push(hisSathi);
// console.log(mySathi[3][2]);

// const newArray = mySathi.concat(hisSathi);
// console.log(newArray);

/* spread operator */

// const allSathii = [...mySathi, ...hisSathi];
// console.log(allSathii);

// const newArray4 = [1, 2, [32, 3], [233, 2323, [3, 333, 666]]];
// const flatArray = newArray4.flat(Infinity);
// console.log(flatArray);

// console.log(Array.isArray(mySathi));
// console.log(Array.from("Sandeh"));
console.log(Array.from({ name: "Kushal" })); //interesting --> gives an empty array because it cant convert it , it gets confused while key to make arry or value to make arry

// let score1 = 333;
// let score2 = 349;
// let score3 = 800;

// console.log(Array.of(score1, score2, score3));
