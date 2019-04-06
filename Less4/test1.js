//alert(bar);//Uncaught ReferenceError: bar is not defined and shut down code
/**
const bar = function(){
  return "bar";
};

//alert(bar);//ok

const func1 = (a, b) => a + b;
const func2 = a => a + 2;
const func3 = a => {return a+2;};
const func4 = a => {
    const b = a+2;
    return b+4;
}


console.log(func1(2, 5));
console.log(func2(7));
console.log(func3(21));
console.log(func4(11));


/**
 call back functions


function testCb(a, b, callBack){
    callBack(a+b);
}

testCb(2, 6, function (res){
    console.log(res);
});

let arr = [1, 2, 5, 53, 8];

const newArr = arr.filter(function (item){
   return item%2===0;
});

const newArr22 = arr.filter(item => item%2 ===0);//the same code as newArr;

console.log(newArr);
console.log(newArr22);

arrSum.forEach((item, index) => {
    console.log(index);
    console.log(index);
});

arr.map(item => Math.pow(item, 2));

*/
//***************************************************************************************
console.log("====================================================");


