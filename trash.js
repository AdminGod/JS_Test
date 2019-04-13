(function () {
        const [a, b] = [1, 2];

        const {prop1, ...other} = {
            prop2: "222",
            prop1: "111",
            prop3: "333",
            prop4: "444"
        }
        console.log("PROP1", prop1);
        console.log(other);
        console.log(other.prop2);
})();
