//Immediately invoked function expresion IIFE

(function hello() {
  //named iife
  console.log("Hello");
})(); // must include ; if not throws error because the iife function dont know where to stop the context so ; is must

// (() => {
//   console.log("Arrow function Hello");
// })();

((name) => {
  console.log(`Hello ${name}`);
})("Sandesh");
