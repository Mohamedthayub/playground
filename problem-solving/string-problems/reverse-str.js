let Name = "javascript";
let reverse = "";
for(let i = Name.length -1; i>=0; i--){
    reverse = reverse + Name[i];
}
console.log(reverse);



let Name2 = "AEiou";
let count = 0;
for(let j = 0; j<Name2.length; j++){
    let  char = Name2[j].toLowerCase();
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        count++;
    }
}
console.log(count);


/*
Input: "aabbcddee"
Output: "c"
vbnet
*/

let map = new Map();
let str = "aabbcddee";
for(let i = 0; i<str.length; i++){
    if(!map.has(str[i])){
        map.set(str[i], 1);
    }
    else{
        map.set(str[i], map.get(str[i]) + 1);
    }
}
for(let [key,value ] of map){
    if(value === 1){
        console.log( key);
    }
}
