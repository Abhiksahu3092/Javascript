
let name ="bootstrap"
const loadscript=(src)=>{
    let pr=new Promise((resolve,reject)=>{
    let spt=document.createElement('script');
    spt.src=src
    console.log("analyzing the script")
    spt.onload=function(){
        setTimeout(()=>{
            resolve("The script is loaded")
        },2000)
    }

    spt.onerror=function(){
        setTimeout(()=>{
            reject("The script is not loaded")
        })
    }
    document.body.appendChild(spt)
    })

    return pr
}

/*const load=(error,name)=>{
   if(error){
        console.log(error);
        return
   }
   console.log("There was no error")
}*/



let pr=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

/* pr.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
}) */


/*or we can say that*/

//this is a example of attaching multiple handlers
pr.then((value)=>{
    console.log(value)
})

pr.then((value)=>{
    console.log("promises are done")
})