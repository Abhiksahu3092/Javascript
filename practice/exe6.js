const update=()=>{
    let a=new Date();
    let h=a.getHours();
    let m=a.getMinutes();
    let s=a.getSeconds();
    
    let time=h+" : "+m+" : "+s;
    console.log(time);

    document.getElementById("clock").textContent=time;
}

setInterval(update,1000);
update();
