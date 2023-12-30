console.log("we are starting with the promises")
let p1
p1=new Promise(function pro(resolve,reject){
    setTimeout(function(){
        resolve(true)
        //console.log("resolved")
    },6000)
})

setTimeout(function(){
    console.log(p1)
},2000)

let p2
p2=new Promise(function pro(resolve,reject){
    setTimeout(function(){
        reject(new Error("error"))
        //console.log("rejected")
    },6000)
})

setTimeout(function(){
    console.log(p2)
},2000)

p1.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})

p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})
