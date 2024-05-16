const myNumbs = [1, 2, 3, 4, 5, 6, 7];

// const newNumbs = myNumbs.map((num) => {
//   return num + 20;
// });
// console.log(newNumbs);

// myNumbs.forEach((numb) => {
//   console.log(numb + 20);
// });

const result = myNumbs
  .map((numb) => numb * 5)
  .map((numb) => numb - 1)
  .filter((numb) => numb <= 20);
console.log(result);
