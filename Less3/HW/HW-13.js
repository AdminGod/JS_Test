alert(checkNumb(inputNumb("Number: ")));

function checkNumb(number) {
    if(number > 10) {
        return number * number;
    }else if(number <= 7) {
        return "число меньше 7";
    }
    return --number;
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