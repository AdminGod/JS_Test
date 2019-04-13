(function () {
    let arr1 = [1, 2, 3, 4, 5];//new arr >> [1, 2, 3, 'a', 'b', 'c', 4, 5]

    console.log(arr1.splice(2, 3, 'a', 'b', 'c'));
    console.log(arr1);
})();
