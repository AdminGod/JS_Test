let number = parseInt(prompt("Input number products "));
//input experience in years
console.log(number);
while(true){
    if(!isNaN(number)){
        break;
    }
    number = parseInt(prompt("Error. Input number of products."));
}

let suffix;
console.log(number%100);
console.log(number%100 < 20);
console.log(number%10 >= 2);
console.log(number%10 <= 4);
if(number%10 === 1 && number%100 !== 11){
    suffix = "";
}else if(number%10 >= 2 && number%10 <= 4 && number%100 !== 12 && number%100 !== 13 && number%100 !== 14){
    suffix = "а";
}else{
    suffix = "ов";
}
alert("товар" + suffix);

