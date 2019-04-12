(function () {
    let a = parseInt(prompt("input a: "));
    let sum=0;
    sum = sumNums(a, 0);
    console.log(sum);


    function sumNums(a){
        if(a>0){
            let left = a%10;
            sum+=left;
            a-=left;
            a=a/10;
            sumNums(a);
        }
        return sum;
    }
})();