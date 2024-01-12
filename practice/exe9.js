function loadscript(){
    let new_promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject(new Error("new error"))
        }, 3000);
    })
    
    return new_promise
}


async function load(){
    try{
        let p=await loadscript()
        console.log(p)
    }
    catch(error){
        console.log("error handled")
    }
}

load()