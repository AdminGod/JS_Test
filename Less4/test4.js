//recurtion


function factorial (n){
    if(n === 1){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5));

const nums = [1, 2, 3, 4, 5, 6];

const sum = nums.reduce(function(acc, currentItem){
  return acc + currentItem;
}, 0);

const sum2 = nums.reduce((acc, currentItem) => acc * currentItem, 1);

console.log(sum);

let array = [1, 2, 4, 5];

array.map(item => ({value : item}));