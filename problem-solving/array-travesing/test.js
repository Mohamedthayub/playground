let array =  [10, 25, 5, 89, 60];
let largest = array[0];

for(let i = 1; i<array.length; i++){
    if(array[i] > largest){
        largest = array[i];
    }
}
console.log(`The largest number is ${largest}`);

let arr = [1,2,3,4,5];

let start = 0;
let end = arr.length - 1;

while(start < end){
    [arr[start] , arr[end]] =  [arr[end] , arr[start]];
    start++;
    end--
}
console.log(arr);

let  arr3 = [2, 3, 4, 2, 5, 2, 6];
let target  = 2;
let frequency = 0;
for(let j = 0; j<arr3.length; j++){
    if(arr3[j] === target){
        frequency++;
    }
}
console.log(frequency);