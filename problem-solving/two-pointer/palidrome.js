function isPalidrome(arr){
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        if(arr[start] !== arr[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log(isPalidrome([1,2,3,2,1]))
console.log(isPalidrome([1,2,3,3,2,1]))

function findTwoSum(arr,target){
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        let sum = arr[start ] + arr[end];
        if(sum === target){
            return [arr[start] , arr[end]];
        }
        else if(sum < target){
            start++;
        }
        else{
            end--;
        }
    }
    return [];
}
console.log(findTwoSum([2, 7, 11, 15],1));


/*
Input:  [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
makefile
Copy code
Input:  [1, 0, 2, 0, 0, 4]
Output: [1, 2, 4, 0, 0, 0]
 */
function moveZeros(arr){
    let index = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] != 0){
            arr[index] = arr[i];
            index++;
        }
    }
    while(index < arr.length){
        arr[index] = 0;
        index++;
    }
    return arr;
}
console.log(moveZeros([0, 1, 0, 3, 12]))
console.log(moveZeros([1, 0, 2, 0, 0, 4]))