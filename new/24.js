let p1=new Promise((resolve,reject)=>{
    console.log("promise 1 is processing")
    setTimeout(()=>{
        resolve("promise 1 is done")
    },3000)
})


p1.then((value1)=>{
    console.log(value1)
    let p2=new Promise((resolve,reject)=>{
        console.log("promise 2 is processing")
        setTimeout(()=>{
            resolve("promise 2 is done")
        },3000)
    })
    return p2
}).then((value2)=>{
    console.log(value2)
    console.log("all promises are done")
})