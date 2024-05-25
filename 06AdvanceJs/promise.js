// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("I haveee arrived");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise ");
// });

// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async Taskkk completed ");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Promise Resolve ");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Sandesh", id: 2222 });
//   }, 1000);
// });
// promiseThree.then(function (data) {
//   console.log(data);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Sandesh", id: 3334 });
//     } else {
//       reject("Error something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then(function (data) {
//     console.log(data);
//     return data.username;
//   })
//   .then(function (username) {
//     console.log("User Name: ", username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("The promise has been resolved or rejected");
//   });

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ laungage: "Js", code: 999 });
//     } else {
//       reject("Error");
//     }
//   }, 1000);
// });

// async function consumePromise() {
//   try {
//     const response = await promiseFive;
//     console.log(response.code);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromise();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://api.github.com/users");
//     const data = await response.json();
//     data.forEach((user) => {
//       console.log(user.login);
//     });
//   } catch (error) {
//     console.log("E", error);
//   }
// }
// getAllUsers();
fetch("https://api.github.com/users")
  .then((response) => {
    const data = response.json();
    return data;
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user.login);
    });
  })
  .catch((error) => {
    console.log(error);
  });
