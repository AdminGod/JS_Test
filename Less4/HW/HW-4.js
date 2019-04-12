(function () {
    let n = parseInt(prompt("input n: "));

    let arr = [];

    decrease(n);
    alert(arr.join(" "));

    function decrease(n){
        if(n>0){
            arr.push(n);
            decrease(--n);
        }
    }
})();