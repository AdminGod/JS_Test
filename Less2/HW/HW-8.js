let yearOfBirth = parseInt(prompt("Input year of birth:"));
//input apartment number
let currentYear = new Date().getFullYear();
while(true){
    if(!isNaN(yearOfBirth) && yearOfBirth <= currentYear && yearOfBirth > 0){
        break
    }
    yearOfBirth = parseInt(prompt("Error. Input correct year of birth"));
}

let age = currentYear - yearOfBirth

if(age > 16){
    alert("Your age is " + age + "years. You are welcome!");
}else{
    alert("Your age is " + age + "years. No entry");
}
