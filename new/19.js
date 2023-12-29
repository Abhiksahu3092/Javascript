//console.log("Program starts")
/*This set time out function was called but as it has a timer of 3000ms it was thrown in the background but still the program runs and the next code runs as it is */
/*setTimeout(function() {
    console.log("I am learning about async programming")
},2000);
console.log("program ends")*/

/*a function when passed as argument to another function is called as callback functions */

const loadscript=(src,callback)=>{
    let spt=document.createElement('script');
    spt.src=src
    spt.onload=function(){
        console.log("src: "+src+" is loaded")
        callback()
    }
    document.body.appendChild(spt)
}

const load=(name)=>{
    console.log("The script is loaded from "+name)
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",load("bootstrap"))