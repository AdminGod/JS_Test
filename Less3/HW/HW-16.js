let str = "123456";
let arr = str.split("");
let arr2 = [];
//result "214365"

for(let i = 0; i < arr.length; i+= 2){
    arr2.push(arr[i+1]);
    arr2.push(arr[i]);
}

alert(arr2.join(""));