
(function () {
    let obj = {
        name : "Vasia",
        func (){
            return "function___";
        }
    }
    console.log(obj["name"]);
    console.log(obj.func());
    console.log("after changing");
    obj.name = "Vasia V.2.0";
    console.log(obj.name);

    console.log(Object)

    console.log("================================");

    let arr2 = [1, 2, 3];
    let obj2 = {
        params : arr2
    }
    console.log(obj2.params);

    arr2.push(222222);

    obj2.params.push(333333333333);

    console.log(arr2);
    console.log(obj2.params);

})();