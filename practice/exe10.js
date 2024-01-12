let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(45)
    }, 1000);
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(55)
    }, 2000);
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(65)
    }, 3000);
})
let p4=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(65)
    }, 4000);
})
let p5=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(65)
    }, 5000);
})
let p6=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(65)
    }, 6000);
})
let p7=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(65)
    }, 7000);
})
let p8=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(65)
    }, 8000);
})

async function fn1(){
    let new_promise=await Promise.all([p1,p2,p3,p4,p5,p6,p7,p8]);
    //much faster than the other approach
    console.log(new_promise)
}




async function fn2(){
    let promise1=await p1;
    let promise2=await p2;
    let promise3=await p3;
    let promise4=await p4;
    let promise5=await p5;
    let promise6=await p6;
    let promise7=await p7;
    let promise8=await p8;
    console.log(promise1,promise2,promise3,promise4,promise5,promise6,promise7,promise8)
}

fn2()