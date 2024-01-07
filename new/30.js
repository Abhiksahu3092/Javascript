//console.log(hello)//this statement causes error and further the code does not work

//try catch work synchronously only
//suppose we give a settimeout function inside try it will give an error because the statement inside timeout is scheduled and try did its job of identifying the schedule and after that it has nothing do with its error

try{
    throw new Error("This is a new error")
}
catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
