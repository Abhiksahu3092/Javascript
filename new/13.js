let a = document.getElementsByTagName("div")[0];
console.log(a);

//a.innerHTML = a.innerHTML + '<p>hello p</p>';
//this is a old way of insertion

let b=document.createElement('div');
b.innerHTML='<p>This is created element</p>';

//a.appendChild(b); inserts at the end of the div
//a.prepend(b);