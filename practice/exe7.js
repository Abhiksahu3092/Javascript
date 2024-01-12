function loadscript(src){
    let load=new Promise((resolve,reject)=>{
        let s=document.createElement("script")
        s.src=src

        s.onload=function(){
            resolve("The script is loaded")
            console.log("hey")
        }
        
        s.onerror=function(){
            reject(new Error("new error"))
        }
        
        document.body.appendChild(s)
    })
    return load
}

let updated_src=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

updated_src.then((value)=>{
    alert("your script is loaded")
})

updated_src.catch((error)=>{
    alert(error)
})