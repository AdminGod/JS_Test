(function () {
    let a = parseInt(prompt("input a: "));
    let b = parseInt(prompt("input b: "));
    let numbers = [];

    recurtion(a, b);
    function recurtion(a, b) {
        if (a === b) {
            return;
        }
        if(a<b){
            numbers.push(a);
            a++;//a=2, b=6; 2, 3, 4, 5, 6
        }else{
            numbers.push(a);
            a--;//a=6; b=2; 6, 5, 4, 3, 2
        }
        recurtion(a, b);
    }

    console.log(numbers.toString());
})();