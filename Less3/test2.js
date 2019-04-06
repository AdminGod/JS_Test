//matrix

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//alert(matrix.join("-"));

/**
let matrix2 = matrix[0].slice(0);
matrix[0][0] = 777;
console.log(matrix[0].join());
console.log(matrix2.join());
 */

let matrix2 = matrix.slice(0);
matrix[0][0] = 777;
console.log(matrix[0].join());
console.log(matrix2[0].join());