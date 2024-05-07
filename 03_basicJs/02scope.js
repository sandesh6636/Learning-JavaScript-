// var --> global scope which means , if declared it can be used any where in code , whcih will now follow the block scope
// global scope while using node and in browser console is different

if (true) {
  let numb = 50;
  console.log("First if ", numb);
  if (true) {
    let numb = 69;
    console.log("second if", numb);
  }
  console.log("Outside the sencond if", numb);
}

//var

// for (var count = 1; count <= 10; count++) {
//   console.log(count);
// }
// console.log(count); // count will be 11 , because the condition statemetn 11<=10 will false and come outside
