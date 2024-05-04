const newUser = new Object();
// const newUser = {};
// console.log(newUser);

newUser.name = "sandesh";
newUser.email = "sandesh@gamil.com";
// console.log(newUser.name);

// const  generalUser = {
//     user:{
//         fullname:{
//             name:"Sandesh",
//             email:"2dolist99@gmail.com"
//         }
//     }
// }

// console.log(generalUser.user.fullname.name);

const obj1 = { 1: "One", 2: "Two" };
const obj2 = { 4: "Four", 9: "Xeroo" };

// const obj3 = {Obj1,Obj2};  //Gives same result like array gives
// const obj3 = Object.assign({},obj1,obj2);  // {}, means sabai add garey raa tesma halnuu if {} xaina vaneyy , obj1 ma janxaa

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

console.log(newUser);
console.log(Object.keys(newUser));
console.log(Object.values(newUser));
console.log(Object.entries(newUser));
