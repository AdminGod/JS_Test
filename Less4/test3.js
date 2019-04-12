(function (){
    //all params inside is unqiue from others
   function* generator(){
       let counter  = 1;
       while(true){
           yield ++counter;
       }
   }

   const gen1 = generator();

   console.log(gen1.next().value());
})();