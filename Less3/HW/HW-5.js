let int = parseInt(prompt("Number:"));

//arr size
while (true) {
    if (!isNaN(int)) {
        break;
    }
    int = parseFloat(prompt("Error. You need to input a number. Try again."));
}

alert("Number is even: " + isEven(int));

function isEven(number){
    return number%2 === 0;
}