let arr = ["asdf", 123, "asdf", [1234, 32, ""]];

alert(countArrLength(arr));
alert(countArrLength([]));
alert(countArrLength(undefined));
alert(countArrLength(NaN));
alert(countArrLength("sga"));

function countArrLength(arr){
    return Array.isArray(arr) ? arr.length : "error";
}