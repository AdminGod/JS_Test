let arr = [1, 3, 2, 3, 1, 5, 8, 7, 10, 9];
let limit = 10;
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    if(sum > limit){
        alert("sum of " + (i+1) + " first numbers bigger than " + limit);
        break;
    }
}
