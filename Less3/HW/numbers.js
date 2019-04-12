let str = "123456789";

let arrNumb  = str.split("");

(function () {
for(let i = 0; i <= 100; i++){


    if(i%3===0 && i%10===0){
        console.log("TriTon - " + 3);
    }else if(i%3===0){
        console.log("Tri - "+ i);
    }else if(i%10===0){
        console.log("Ton - " + i);
    }else{
        console.log(i);
    }
}
})();


function getCOunter(){
    console.log(func1(1)());//set
    console.log(func1()());//get
}

function func1(arg1=0){

    let counter = arg1;

    function f2() {
        return counter;
    }

    return f2;
}