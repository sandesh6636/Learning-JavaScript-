function addTwoNumber(num1, num2) {
  //parameters
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return -1;
  }
}

// console.log(addTwoNumber(2, 2)); // argument
const result = addTwoNumber(3, "babf"); //only return statement will save or it will be undifined
// console.log(result);

function userLog(username = "Default Name ") {
  if (!username) {
    return `Please enter username`;
  } else {
    return `${username} just loginn!`;
  }
}

// console.log(userLog("sandesh rai"));

function countPrice(...num) {
  // ... is rest operator which pack all the argument  into num and returns an array
  return num;
}
// console.log(countPrice(233, 2222, 222));

function countPrice(val1, val2, ...num) {
  // first 2 argumetn will store in val1 amd val2 then rest will in num as an array

  return num;
}
// console.log(countPrice(233, 2222, 222, 3333));

const userObj = {
  name: "sandesh",
  roll: 34,
};

const handleObject = (obj) => {
  return `User ${obj.name} , roll no ${obj.roll}`;
};

// console.log(handelObject(userObj));

//return statement gareko theya hoo yetkoii output aaudaii ki tw variable ma store garnu paryo ki the console log
console.log(
  handleObject({
    //we can also pass like this way
    name: "Sandesh",
    roll: 39,
  })
);

// const output = handleObject({
//   name: "Sandesh",
//   roll: 39,
// });

// console.log(output);

//Function which accept array and return an 2nd value
function returnSecondValue(array) {
  return `Array second value is ${[array[1]]}`;
}

console.log(returnSecondValue([2, 34, 343]));
