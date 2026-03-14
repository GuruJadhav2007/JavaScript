// import {add} from "./math.js";   //    Allow  importing method 1
// import { sub } from "./math.js";  //   Allow  importing method 1

        //    OR

// import {add, sub} from "./math.js";  // Allow   importing method 2

// import {add, sub, gun} from "./math.js";  // Not Allow Default function import in {} breses like normal function  

import gun,{add, sub} from "./math.js";     // import Default function like this

console.log(add(20,30));
console.log(sub(50,20));
console.log(gun("India"));  //default function