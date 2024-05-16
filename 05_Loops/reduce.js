// const num = [1, 2, 3, 4];
// const total = num.reduce((acc, currval) => {
//   console.log(`Accumulator : ${acc} CurrentValue : ${currval}`);
//   return acc + currval;
// }, 0);
// console.log(total);

/*
const total = numb.reduce((acc,curr) => acc+curr,0)  
*/

const shoppingCard = [
  {
    course: "JS",
    price: 1999,
  },
  {
    course: "Java",
    price: 3999,
  },
  {
    course: "Python",
    price: 3999,
  },
  {
    course: "Ai development",
    price: 15999,
  },
];
const totalPrice = shoppingCard.reduce((acc, currVal) => {
  return acc + currVal.price;
}, 0);
console.log(totalPrice);
