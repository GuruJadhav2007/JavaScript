let a = 10;
var b = 20;

function Read()
{   
    let c  = "30";
    var d = 40;
        
    console.log(a);

    console.log(b);

    console.log(c);

    console.log(d);
}

Read();

console.log(a);

console.log(b);

// console.log(c);         // It is Not Print because it is Block Scope          Error  or Not Allow

// console.log(d);         // It is Not Print because it is Function Scope       Undifined