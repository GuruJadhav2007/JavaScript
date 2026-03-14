let Arr = [100,200,300,400];

Arr.forEach(function(_,ind,_){
        console.log(ind);
});

console.log("\n\n ===================*****==================");

Arr.forEach(function(_,_,array){
        console.log(array);
});