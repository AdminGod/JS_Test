let arr = [1, 2, 3, 4, 5, 6];
let arr2 = [];

for (let i = arr.length-1; i >= 0; i -= 2) {
    arr2.push(arr[i-1]);
    arr2.push(arr[i]);
}
alert("arr1: " + arr.toString() + "\n" + "arr2: " + arr2.toString());

