let number = inputNumb("Number: ");
let power = inputNumb("Power: ");

alert(number + "^" + power + " = " + raiseNumbToPower(number, power));

function raiseNumbToPower(number, power){
    return Math.pow(number, power);
}


function inputNumb(msg) {
    let int = parseInt(prompt(msg));

//is number
    while (true) {
        if (!isNaN(int)) {
            break;
        }
        int = parseFloat(prompt("Error. You need to input a number. Try again."));
    }
    return int;
}