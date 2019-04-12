let logg = prompt("Loggin: ");
let pass = prompt("Password: ");

let db = [];
db.push(["ivan", "334455"]);
db.push(["alex", "777"]);
db.push(["petr", "b5678"]);

let userFound = false;
for(let userItem of db){
    if(logg === userItem[0] && pass === userItem[1]){
        userFound = true;
        alert("Добро пожаловать");
    }
}

if (!userFound){
    alert("Ошибка входа");
}
