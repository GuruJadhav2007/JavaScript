let arr1 = [1,2,3,4,5];
let age  = [50,60,70];

let arr2 = arr1;

let arr3 = ["Fork","Infosystems",...arr1,"Karad",...age];  // Spread Is use in Array or Object

console.log(arr1);
console.log(age);
console.log(arr2);
console.log(arr3);

let arr4 = ["Fork","Infosystems",arr2,"Karad",age];  // Here Noy use Spread

console.log("\n",arr4);