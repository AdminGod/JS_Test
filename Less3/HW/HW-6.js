let arr = [1, 2, 4, 3, "sd", "2a", "44"];

let arr2 = [];//2, 4, 44


for(let i of arr){
  if(isEven(i)){
      arr2.push(i);
  }
}
alert(arr2.toString());
function isEven(number){
    return number%2 === 0 && !isNaN(number%2);
}