(function () {
    let n = parseInt(prompt("input n: "));

    let numbers ="";

    decrease(0);
    alert(numbers);

    function decrease(i){
        if(i<=n){
            numbers += " " + i;
            decrease(++i);
        }
    }
})();
