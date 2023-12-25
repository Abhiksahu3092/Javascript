//alert("hey what do you want ?");

//suppose we have to add a delay in our code, we can use setTimeout and setInterval

/*let a=setTimeout(() => {
    alert("This was setTimeout")
}, 5000);

let b=prompt("do you want a setTimeout");

if(b=="no"){
    clearTimeout(a);
}
*/

setInterval(() => {
    alert("This is setInterval");
}, 3000);
//similarly we can use clearInterval