let numbers = [5,10,20];
let result = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(result); 


let number3 =  [10, 4, 30, 2, 15];
let result2 = number3.reduce((accumulator, current) =>  accumulator < current ? accumulator : current);
console.log(result2);


let numbers2 = [40, 100, 50];

let result3  = numbers2.reduce((accumulator,current) => accumulator > current ? accumulator : current);

console.log(result3);



let newNumbers  =   ["a", "b", "a", "c", "b", "a"];

let objResult =  newNumbers.reduce((accumulator,current) => {
    if(accumulator[current]){
        accumulator[current] = accumulator[current]  + 1;

    }
    else{
        accumulator[current] = 1;
    }
    return accumulator;
},{});
console.log(objResult);



 const marks = [
  { name: "Venkatesh", score: 50 },
  { name: "Rahul", score: 70 },
  { name: "Venkatesh", score: 30 }
];


let finalResult = marks.reduce((accumulator,current)=> {
    if(accumulator[current.name]){
        accumulator[current.name] += current.score;
    }
    else{
        accumulator[current.name] = current.score;
    }
    return accumulator;
},{});
console.log(finalResult);
