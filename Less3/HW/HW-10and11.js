let age = inputNumb("age: ");

alert(checkAge(age));

function checkAge(age){
    return age >= 16 ? "добро пожаловать" : "Вы еще молоды";
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