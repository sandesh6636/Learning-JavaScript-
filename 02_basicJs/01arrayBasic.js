const myArr = [1, 3, 2, 4, 33];
console.log(myArr[3]);

const myArr2 = ["Sandesh", "Kushal", "Ram"];
// for (let count = 0; count < myArr2.length; count++) {
//   console.log(myArr2[count]);
// }

// Array array-copy-operaton shallow-copy --> means point the same object( same reference point)

// myArr2.push("Sital");
// console.log(myArr2);

// myArr2.pop();
// console.log(myArr2);

// unshift--> add in starting , shift --> remove from first

// const newArr = myArr2.join();
// console.log(myArr2);
// console.log(newArr); //---> typeof is string

// slice and splice
const newArr1 = myArr.slice(2, 4);
console.log("Original array A", myArr);
console.log(newArr1);

const newArr2 = myArr.splice(2, 4);
//Splice will manipulate the original array , the splice portion will came out in new array
console.log("Original array B", myArr);
console.log(newArr2);
