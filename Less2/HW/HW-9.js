let experience = parseFloat(prompt("Input number of years of your experience: "));
//input experience in years
console.log(experience);
while(true){
    if(!isNaN(experience) && experience > 0){
        break;
    }
    experience = parseFloat(prompt("Error. Input correct number of years of your experience: "));
}

let percentOfSupplement;

if(experience < 3){
    percentOfSupplement = 0;//%
}else if(experience >= 3 && experience < 10){
    percentOfSupplement = 10;//%
}else if(experience >= 10 && experience < 20){
    percentOfSupplement = 20//%
}else{
    percentOfSupplement = 25;//%
}

alert("The amount of your supplement is " + percentOfSupplement + "%");