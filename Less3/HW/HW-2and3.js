let arr = [
    [1, 2, 43, 32],//78
    ["sdg", 89, "23", "w21", 9],//121+78
    "sdaf",//0+199
    "1",//1+199
    -1,//-1+200
    "-01",//-1+199
    [3, [1, 1, [2, 2]]]//3+2+4+198
];//sum = 207

alert("matrix sum is " + arrMatrix(arr));

function arrMatrix(matrix){
    let sum = 0;
    for(let i = 0; i < matrix.length; i++){
        if(Array.isArray(matrix[i])){
            sum += arrSum(matrix[i]);
        }else if(!isNaN(parseFloat(matrix[i]))){
            sum += parseFloat(matrix[i]);
        }else{
            console.log(matrix[i] + " is not a number");
        }
    }
    return sum;
}

function arrSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            sum += arrSum(arr[i]);
        }else if(!isNaN(parseFloat(arr[i]))){
            sum += parseFloat(arr[i]);
        }else{
            console.log(arr[i] + " is not a number");
        }
    }
    return sum;
}