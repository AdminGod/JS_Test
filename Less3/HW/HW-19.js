(function () {
    let arr = [1, 2, 4, 5];

    let arr2 = arr.map((x)=>x*x);
    console.log(arr);
    console.log(arr2);

    console.log(increaseArr(arr2));

    //ЧТо тут надо сделать????

    function increaseArr(arr){
        let res = [];
        for(let elem of arr){
            res.push(square(elem));
        }
        return res;
    }

    function square (x) {
        return x*x;
    }
})();