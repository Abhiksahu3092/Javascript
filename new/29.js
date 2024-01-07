/*Try and catch is used to handle an error if any occurs during the functioning of the the script which also to helps to run other codes without throwing the error*/

setTimeout(() => {
    console.log("hacking your phone")
},2000);

setTimeout(() => {
    console.log("retrieving your data")
},3000);

//console.log(hello)//this statement causes error and further the code does not work

//try catch work synchronously only
//suppose we give a settimeout function inside try it will give an error because the statement inside timeout is scheduled and try did its job of identifying the schedule and after that it has nothing do with its error

try{
    console.log(hello)
}
catch(error){
    console.log(error)
}
setTimeout(() => {
    console.log("analyzing your data")
},4000);

setTimeout(() => {
    console.log("data collected")
},5000);