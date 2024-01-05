let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 1")
    }, 6000);
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 2")
    }, 5000);
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 3")
    }, 4000);
})

let p4=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject(new Error("this is a error"))
    }, 3000);
})

//here we have given the timeout values but in real world for suppose we are fetching some data from server. In that case we don't know if the server responding in how much time so the settimeout can be any random time and also suppose we have to show the promises when all the promises are recieved



/*let promise_array=Promise.all([p1,p2,p3]);
promise_array.then((value)=>{
    console.log(value);
})*/


//suppose there is an error in any of the promises but still the resultant promise will show the final

/*let promise_arr_2=Promise.allSettled([p1,p2,p4])
promise_arr_2.then((value)=>{
    console.log(value)
})*/


//Promise.race() helps to return the promise value which is reached first
//but this can show the result of a promise which may not be resolved

/*let promise_arr_3=Promise.race([p4,p2,p3])
promise_arr_3.then((v)=>{
    console.log(v)
})*/

//It will wait untill the fastest resolved promise appears. If there is no such promise it will show an error at the end

/*let promise_arr_4=Promise.any([p4,p2,p3])
promise_arr_4.then((v)=>{
    console.log(v)
})*/


//suppose we have to resolve/reject all the promises together
let resolve_all=Promise.reject(new Error("!!!!!!!"))
resolve_all.then((value)=>{
    console.log(value);
})