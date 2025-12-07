let marks = [50, 70, 80, 90]; 
let result = marks.map(num => num + 5);
console.log(result);



let ages = [12, 18, 20, 15, 30];

let result2 =  ages.filter(age =>  age >= 18 );
console.log(result2);


let prices = [100,200,150,50];

let total = prices.reduce((acc , price) => acc + price , 0);
console.log(total);