(function () {
    let n = parseInt(prompt("input n: "));

    let numbers ="";

    decrease(n);
    alert(numbers);

    function decrease(n){
        if(n>0){
            numbers += " " + n;
            decrease(--n);
        }
    }
})();