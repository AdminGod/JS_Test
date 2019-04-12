let arr = [];
let arrLen = prompt("Input array length");
for(let i = 1; i <= arrLen; i++){
    let str = "";
    for(let j = 0; j < i; j++){
        str += "x";
    }
    arr.push(str);
}
alert("arr >> " + arr.toString());