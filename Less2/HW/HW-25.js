let arr = [1, -12, 12, 4, 15, 6, 12, 8, 9, 10];
let arr2 = [];

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]%2 === 0) {
        arr2.push(arr[i]);
    }
}
alert("numbers: " + arr.toString() + "\n" + "even numbers: " + arr2.toString());

