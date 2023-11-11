let arr=[`What is fast, loud and crunchy? A rocket chip` , `What does a storm cloud wear under his raincoat? Thunderwear` , `Name the kind of tree you can hold in your hand? A palm tree!` , `What do you call a guy whos really loud? Mike` , `What did the lava say to his girlfriend? “I lava you!”` , `Why did the blue jay get in trouble at school? For tweeting on a test!` , `What did one pickle say to the other? Dill with it` , `Why is a football stadium always cold? It has lots of fans!` , `What do you call two bananas on the floor? Slippers.` , `What kind of math do birds love? Owl-gebra!`];

let l=arr.length;
let p=alert("Let us hear a joke");
let a;
let b;
let n;
do{
    n=arr[Math.floor(Math.random()*l)];
    alert(n);
    b=confirm("do you want to hear a new joke?");
}while(b);