let number = [2,3,4];
let result = number.map(x => x * 2);
console.log(result);


let input  = ["apple", "mango"];
let result2 = input.map(x => x.toUpperCase());
console.log(result2);

const users = [
  {name: "Venkatesh", age: 20},
  {name: "Rahul", age: 21}
];
let result3 = users.map(user => user.name);
console.log(result3);