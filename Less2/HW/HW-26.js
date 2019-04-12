let arr = [1, 2, 3, 4, 5, 6];
let arr2 = [];

for (let i = 1; i < arr.length; i += 2) {
    arr2.push(arr[i]);
    arr2.push(arr[--i]);
    i++;
}
alert("arr1: " + arr.toString() + "\n" + "arr2: " + arr2.toString());

