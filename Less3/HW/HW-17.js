let start = inputNumb("Start: ", "start");
let step = inputNumb("Step: ", "step");
sequence(start, step);

function sequence(start, step){
    console.log(generator(start, step).next().value);
    console.log(generator(start, step));
    console.log(generator(start, step).next());
    console.log(generator(start, step).next().value);

    console.log(generator(start, step));
    console.log(generator(start, step).next());
    console.log(generator(start, step).next().value);

    console.log(generator(start, step));
    console.log(generator(start, step).next());
}

function* generator(start, step){

    while (start >= 0) {
        yield +start + +step;
    }
}

function inputNumb(msg, param) {
    let int = prompt(msg);

    //is number
    //todo acept ""
    while (true) {
        if(param === "start"){
            int = int === "" ? 0 : int;
        }else{
            int = int === "" ? 1 : int;
        }

        if (!isNaN(int)) {
            break;
        }
        int = parseFloat(prompt("Error. You need to input a number. Try again."));
    }
    return int;
}