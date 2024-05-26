const discripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(discripter);

chai = {
  name: "Best chai",
  price: 80,
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key},${value}`);
  }
}
