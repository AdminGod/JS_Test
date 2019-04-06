let a = parseFloat(prompt("Inut a:"));
//input a
while(isNaN(a)){
    console.log(parseFloat(a));
    if(isNaN(a)){
        a = parseFloat(prompt("Error. You need to input Number. Try again. Input a:"));
    }
}
//input b
let b = parseFloat(prompt("Inut b:"));
while(isNaN(b)){
    console.log(parseFloat(b));
    if(isNaN(b)){
        b = parseFloat(prompt("Error. You need to input Number. Try again. Input b:"));
    }
}

let max = a === b ? "equal" :  a > b ? a : b;

alert(max);