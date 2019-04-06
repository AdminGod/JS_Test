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
let x = a === b ? 400 : a > b ? (a+b/2*4) : ((a-b+2/b*4));

alert("X = " + parseFloat(x));