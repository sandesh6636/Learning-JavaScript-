// var --> global scope which means , if declared it can be used any where in code , whcih will now follow the block scope
// global scope while using node and in browser console is different

// if (true) {
//   let numb = 50;
//   console.log("First if ", numb);
//   if (true) {
//     let numb = 69;
//     console.log("second if", numb);
//   }
//   console.log("Outside the sencond if", numb);
// }

//var

// for (var count = 1; count <= 10; count++) {
//   console.log(count);
// }
// console.log(count); // count will be 11 , because the condition statemetn 11<=10 will false and come outside

function one() {
  const oneNumber = "One Number";
  function two() {
    const twoNumber = "Two number";
    console.log(oneNumber);
  }
  two();
}
one();

console.log(addOne(90));
function addOne(num) {
  return num + 1;
}

// console.log(num(90));
//--> throws an error because we have declare the function and hod it into a vaialble num , and in js we cant use the varibale before deceleration
const num = (num) => {
  return num + 2;
};
