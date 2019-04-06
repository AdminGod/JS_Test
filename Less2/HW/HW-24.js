let arr = [1, -12, 12, 4, 15, 6, 12, 8, 9, 10];
let arr2 = [];

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > 0 && arr[i] < 10) {
        arr2.push(arr[i]);
    }
}
alert("array: " + arr.toString() + "\n" + "array with where numbers > 0 and < 10: " + arr2.toString());

