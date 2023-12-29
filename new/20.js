//console.log("Program starts")
/*This set time out function was called but as it has a timer of 3000ms it was thrown in the background but still the program runs and the next code runs as it is */
/*setTimeout(function() {
    console.log("I am learning about async programming")
},2000);
console.log("program ends")*/

/*a function when passed as argument to another function is called as callback functions */


/*suppose we have a error in loading of script then we can handle it*/

let name ="bootstrap"
const loadscript=(src,callback,name)=>{
    let spt=document.createElement('script');
    spt.src=src
    spt.onload=function(){
        console.log("src: "+src+" is loaded")
        callback(null,name)
    }

    spt.onerror=function(){
        console.log("script not loaded")
        callback(new Error("found some error with the js"))
    }
    document.body.appendChild(spt)
}

const load=(error,name)=>{
   if(error){
        console.log(error);
        return
   }
   console.log("There was no error")
}


loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",load)