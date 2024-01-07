/*Async keyword ensures that the function returns a promise*/

/*async function abhik(){
    return 45;
}

abhik().then((x)=>{
    console.log(x);
})*/


async function weather(){
    let delhi_weather=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("8.2 degree celsius")
        }, 5000);
    })

    let bhubaneswar_weather=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("18 degree celsius")
        }, 8000);
    })

    let dw=await delhi_weather;
    let bw=await bhubaneswar_weather;
    return [dw,bw];
}

let ans=weather();
ans.then((value)=>{
    console.log(value)
})