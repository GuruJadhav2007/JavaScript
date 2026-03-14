let arr = [10,20,30,40,50,60,70,80,90,100];
let part = arr.slice(3,9);  // copy array start index to end index -1

console.log(arr);
console.log(part);

part.splice(2,3,"India");  // delete array element ( whice index to start , how many count to elements delete )

console.log(part);