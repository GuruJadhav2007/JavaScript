 function checkBalance(balance)
 {
    if(balance > 0)
    {
        console.log("Available Balance RS : ",balance);
    }
    else
    {
        console.log("Insufficient Balance ",balance ?? "-120");
    }
 }

 checkBalance(10000);
 checkBalance();        // Parameterized function call without parameter is ALLOW IN JS 
                        // It is NOT ALLOW in OTHER Languages 