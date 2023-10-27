//use of functions is required when something is to be used repeatedly
function greet(name,greettext){
    console.log(greettext+name);
    let name1=`name1`;//It is local scope so it does not have any effect on the global scope
}

function sum(a,b,c){
    let d=a**b
    //to represent power of any number we have to use **
    return d;
}
let greetings=`good morning `;
let name1='abhik'
let name2='Anand';
let name3='abhimanyu';
let name4='abinas';
greet(name2,greetings);
greet(name1,greetings);
greet(name3,greetings);
greet(name4,greetings);

let a=3;
let b=2;
let c=1;
let val=sum(a,b,c);
console.log(val);

//another way of defining a function. This is also called as arrow function
const sum2=(a,b)=>{
    return a+b;
}

console.log(sum2(2,3));