 function Sum(num1,num2,num3,num4,num5)
 {
        console.log(num1,num2,num3,num4,num5);  //Here Not use Rest Method
 }

 Sum(10,20,30,40,50);

 function Sub(...num)
 {
    console.log("\n",num);  // Using Rest Method
    console.log("\n",num[2]);
    console.log(...num);    // Using Spread & Rest
}

 Sub(100,200,300,400,500);