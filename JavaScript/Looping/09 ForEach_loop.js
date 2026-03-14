// forEach loop is specialy used on element and it return Function

let Arr = [20,30,40,50];

Arr.forEach(function(val1)
{
    console.log(val1);

});

    console.log("\n\n ===================*****==================");

// It have 3 parameters 
// para 1 : value
// para 2 : index
// para 3 : element or array

Arr.forEach(function(val1,val2)
{
    console.log(val1,val2);
});

    console.log("\n ===================*****==================");

Arr.forEach(function(val,ind,ele_arr)
{
    console.log("value : ",val,"index : ", ind,"Element or Array : ", ele_arr);
});