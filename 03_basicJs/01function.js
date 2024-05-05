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

console.log(userLog("sandesh rai"));
