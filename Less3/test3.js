sum(1, 2, 5)

function sum(){
    console.log(arguments);
    console.log(arguments[5]);
    for(let i in arguments){
        console.log(arguments[i]);
    }
}
function sum2(...args){
    console.log(args);
    console.log(args[2]);
}