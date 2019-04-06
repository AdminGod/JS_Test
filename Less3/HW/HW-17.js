let start = inputNumb("Start: ");
let step = inputNumb("Step: ");
sequence(start, step);

function sequence(start, step){

}



function inputNumb(msg) {
    let int = parseInt(prompt(msg));

//is number
    //todo acept ""
    while (true) {
        if (!isNaN(int)) {
            break;
        }
        int = parseFloat(prompt("Error. You need to input a number. Try again."));
    }
    return int;
}