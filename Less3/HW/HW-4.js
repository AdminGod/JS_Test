let int = parseInt(prompt("Number:"));

//arr size
while (true) {
    if (!isNaN(int)) {
        break;
    }
    int = parseFloat(prompt("Error. You need to input a number. Try again."));
}

alert("Is number in range: " + isNumberInRange(int));

function isNumberInRange(number){
    return number >= 0 && number <= 10;
}