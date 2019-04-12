let x = parseFloat(prompt("Inut x:"));

//input X
while (isNaN(x)) {
    console.log(parseFloat(x));
    if (isNaN(x)) {
        x = parseFloat(prompt("Error. You need to input Number. Try again. Input x:"));
    }
}
let y = parseFloat(prompt("Inut y:"));
//input Y
while (isNaN(y)) {
    console.log(parseFloat(y));
    if (isNaN(y)) {
        y = parseFloat(prompt("Error. You need to input Number. Try again. Input y:"));
    }
}

//select pic
let picNumb = parseFloat(prompt("Select 1 of 3 schemes"));
console.log(picNumb);


while (true) {
    if (!isNaN(picNumb) && picNumb >= 1 && picNumb <= 3) {
        break;
    }
    picNumb = parseFloat(prompt("Error. You need to input Number from 1 to 3. Try again. Input picNumb:"));
}

if(handleCoordinates(x, y, picNumb)){
    alert("Точка попадает область");
}else{
    alert("Точка НЕ попадает область");
}

function handleCoordinates(x, y, picNumb) {
    if (picNumb === 1) {
        if (Math.abs(x) > 4 || y < 0 || y > 4 || y > 4 - Math.abs(x)) {
            return false;
        }
    } else if (picNumb === 2) {
        if(Math.abs(x) > 1 || Math.abs(y) > 1 || Math.abs(y) < Math.abs(x)){
            return false;
        }
    } else {
        let radius = 1;
        if((x < 0 && y < 0) && (x < -2 || y < -2 || y > -2 + x)){//handle triangle
            return false;
        }else if(Math.abs(x) > radius || Math.abs(y) > radius || y > Math.sqrt(radius*radius - x*x)){// handle part of circle
            return false;
        }
    }
    return true;
}