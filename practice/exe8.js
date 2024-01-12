async function loadscript(src){
    let load=new Promise((resolve,reject)=>{
        let s=document.createElement("script")
        s.src=src

        s.onload=function(){
            resolve("The script is loaded")
            document.body.appendChild(s)
        }
        
        s.onerror=function(){
            reject(new Error("new error"))
        }
        
    })
    let new_load=await load
    return new_load
}

let updated_src=loadscript("https://cdng.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

updated_src.then((value)=>{
   alert("your script is loaded")
})

updated_src.catch((error)=>{
    console.log(error)
})