//arrays

let arr = [];
//push - add elem to the end, return arr.length
//pop - remove last element, return last elem
//shift - remove first elem, return 1st elem
//unshift - add 1t elemnt and move others to right side, return length

//arr.slice(start, end)//end not include, return new arr with values from start to end-1, previous arr without changes

//arr.splice(start, amount, [replace value])//return new arr with values from start to start+amount, previous arr with changes

/**
const c = 4;
const d = 5;
const e = 6;
*/

//>>>

const [c, d, e, ...other] = [4, 5, 6, 7, 8, 9];//rest
/**
 * rest>>>
 * c = 4;
 * d = 5;
 * e = 6;
 * other = [7, 8, 9];//rest
 */
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5, 6, ...arr];//spread
/**
 * arr2 = [3, 4, 5, 6, 1, 2, 5] >> concat arr with another arr in scopes
 */
