function generator(start = 1, step = 2){
    let counter = start;
    return function(){
        counter += step;
    }
}

let gen  = generator (2, 3);

console.log(gen()());
console.log(gen()());
console.log(gen()());
console.log(gen()());