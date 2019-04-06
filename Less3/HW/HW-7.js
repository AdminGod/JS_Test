let int = parseInt(prompt("Number:"));

//is number
while (true) {
    if (!isNaN(int)) {
        break;
    }
    int = parseFloat(prompt("Error. You need to input a number. Try again."));
}
alert("Divisors of the number " + int + " are: " + getDivisors(int));

function getDivisors(int) {
    let arr = [];
    for (let i = 1; i <= int; i++) {//u can't devide on a 0;
        if(int%i === 0){
            arr.push(i);
        }
    }
    return arr;
}