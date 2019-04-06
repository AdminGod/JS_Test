const age = 18;


if(age) {
    //sell beer
    console.log("sell beer");
    if(age >=21){
        console.log("sell vodka");
    }
}else {
    console.log("don't seel the beer and any tyoe f alcohole")
}

/**
 * == >> compare eqvivalents data
 * === >> compare data types and value;
*/

const isAuth = false;
if(!isAuth){
    console.log("not loggined");
}

const isLogg = "test";
if(!!isAuth){//isLogg >> true; !isLogg >> fasle !isLogg >> true
    console.log("not loggined");
    //todo
}

switch (age) {
    case 18:
        //todo some code
        break;
    case 21:
        //todo some code
        break
    default:
        //todo some other code exceptions situations
}

const msg = age > 18 ? "more than  18" : "less than 18";


while (true){
    console.log(msg);
    break;
}

for(let i = 0; i < 10; i++){

    console.log(i);
}

let arr = [1, 2, 4];

console.log(arr);

for(let i in arr){// i >> index
    console.log(arr[i]);
}

for(let i of arr){// value by each iteration
    console.log(i);
}