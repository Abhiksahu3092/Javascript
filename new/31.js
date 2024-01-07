/*The finally clause*/

const fun=()=>{
    try{
        throw new Error("this is an error");
    }
    catch(error){
        console.log("error identfied ",error);
        return;
    }
    
    finally{
        console.log("But finally somehow the script is running")
    }
}

fun()