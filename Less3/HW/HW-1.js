let arrSize = parseInt(prompt("Array size:"));

//arr size
while (true) {
    if (!isNaN(arrSize)) {
        break;
    }
    arrSize = parseInt(prompt("Error. You need to input a number. Try again."));
}
let arrValues = prompt("Array values:");

let testArr = filloutArray(arrSize, arrValues);
console.log(testArr.toString());

function filloutArray(arrSize, arrValues){
    let arr = new Array(arrSize);
    console.log(arrSize);
    console.log(arrValues);
    for(let i = 0; i < arrSize; i++){
        arr[i] = arrValues;
    }
    return arr;
}