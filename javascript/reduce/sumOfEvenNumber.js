let nums = [10, 15, 20, 25, 30];

let sumOfEven = nums.reduce((accu, curr) => {
    if(curr % 2 === 0){
        return accu + curr;
    }
    return accu;
},0);

console.log(sumOfEven);