let numbers = [10,20,30,40,50];

console.log(numbers.length);
console.log(numbers[0]);

numbers[5] = 60;
console.log(numbers);

numbers.shift();
console.log(numbers);

let length = 0;
for(let element  of  numbers){
    console.log(element);
    length++;
}
console.log(length);