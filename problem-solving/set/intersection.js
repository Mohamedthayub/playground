function  findIntesection(arr1,arr2){
    let set = new Set();
    let intersection = [];
    for(let value of arr1){
        if(!set.has(value)){
            set.add(value);
        }
    }
    for(let value2 of  arr2){
        if(set.has(value2)){
            intersection.push(value2);
        }
    }
    return intersection;
}

console.log(findIntesection([1,2,3,4],[3,4,5,6]));


/*
arr1 = [1, 2, 3, 4]
arr2 = [3, 4, 5, 6]
*/