let login = function(username,password){
    if(username === "admin" && password === "a123")
    {
        console.log("Login Successful");
    }
    else
    {
        console.log("Invalid Credentials");
    }
};

login("Raviraj","R123");
login("admin","a123");