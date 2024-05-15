const programming = ["C++", "Java", "JavaScript", "Php"];
// programming.forEach((value) => {
//   console.log(value);
// });

// function printMe(items) {
//   console.log(items);
// }
// programming.forEach(printMe);

programming.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const myArray = [
  {
    language: "JavaScript",
    file: "Js",
  },
  {
    language: "Java",
    file: "java",
  },
  {
    language: "C++",
    file: "cpp",
  },
];

myArray.forEach((item) => {
  console.log(item.language);
});
