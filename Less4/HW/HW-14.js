(function () {
    /**
     *  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
     */
    let arr1 = [1, 2, 3, 4, 5];

    arr1.splice(2, 0, 'a', 'b');//[1, 'a', 'b', 2, 3, 4, 5]
    arr1.splice(6, 0, 'c');//[1, 'a', 'b', 2, 3, 4, 'c', 5]
    arr1.splice(8, 0, 'e');//[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
    console.log(arr1);
})();