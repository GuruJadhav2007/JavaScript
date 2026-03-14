// let user = { 
//     name : "Guru",
//     show : ()=>{
//         console.log(user.name);
//     },
//     show2 : function(){
//         console.log(this.name);
//     }
// }

// user.show();
// user.show2();

let user = { 
    name : "Guru",
    show(){
        console.log(this.name);
    },
    show2 : function(){
        console.log(this.name);
    }
}

user.show();
user.show2();