let aprtNumber = parseInt(prompt("Inut apartment number from 1 to 90:"));
//input apartment number
while(isNaN(aprtNumber)){
    console.log(aprtNumber);
    if(isNaN(aprtNumber) || aprtNumber > 90 || aprtNumber < 1){
        a = parseInt(prompt("Error. You need to input Number. Try again. Input apartment number from 1 to 90:"));
    }
}

if(aprtNumber >= 1 && aprtNumber <= 20){
    alert("1st entrance");
}else if(aprtNumber >= 20 && aprtNumber <= 48) {
    alert("2nd entrance")
}else{
    alert("3rd entrance")
}