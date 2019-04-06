let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reverseArr = [];

for(let i = arr.length-1; i >= 0; i--){
    reverseArr.push(arr[i]);
}
alert("before: " + arr.toString());
alert("after: " + reverseArr.toString());
