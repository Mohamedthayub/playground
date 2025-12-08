let input = [10, 40, 60, 80];
let result = input.filter(x => x >  50);
console.log(result);


const marks = [35, 50, 30, 90, 65];
let result2 = marks.filter(mark => mark >= 50);
console.log(result2);



const users = [{age: 10}, {age: 18}, {age: 25}];
const result3 = users.filter(user => user.age > 18);
console.log(result3);