let x=function(){
    alert("hello world 1");
}

let y=function(){
    alert("hello world 2");
}

btn.addEventListener('click',x);

btn.addEventListener('click',y);

let a=prompt("your favourite number");

if(a=="2"){
    btn.removeEventListener("click",y);
}