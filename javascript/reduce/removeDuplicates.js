let numbers = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = numbers.reduce((accumulator,currentValue) => {
    if(!accumulator.includes(currentValue)){
        accumulator.push(currentValue);
    }
    return accumulator;
},[]);
console.log(uniqueNumbers);