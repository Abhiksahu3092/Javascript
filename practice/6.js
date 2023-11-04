//changing the color of the first element in nav-bar
let b=document.getElementById("navbarid");
b.style.color="green";

//changing the color of first and last child of an element with class container
let a=document.getElementsByClassName("container");
a[0].firstElementChild.style.color="green";
a[0].lastElementChild.style.color="green";

//changing background color of all <li> tags to cyan
let x=document.getElementsByTagName("li");
for(i=0;i<x.length;i++){
    x[i].style.backgroundColor="cyan"
}