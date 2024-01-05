/*Concept of promises are used to eliminate the disadvantage of maintaining a long and tedious code generated by callback hell or we say as pyramid of doom*/
let promise=new Promise(function(resolve,reject){
    console.log("promise is resolved");
    resolve(45);
})

console.log("hello 1")
setTimeout(function call(){
    console.log("hello 2")
},5000)

console.log("hello 3")

console.log(promise)