(function () {
    let i = parseInt(prompt("input n: "));
    let numbers = [];

    recurtion(i);
    function recurtion(n) {
        if (n > 0) {
            numbers.push(n);
            n--;
            recurtion(n);
        }
    }

    console.log(numbers.toString());
})();