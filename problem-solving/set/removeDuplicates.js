function removeDuplicates(arr){
    let set = new Set([...arr]);
    let result = Array.from(set);
    return result;
}
console.log(removeDuplicates( ["apple", "apple", "banana", "orange", "banana"]));