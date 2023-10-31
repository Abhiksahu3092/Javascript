let arr=['r','s','p'];
let n=arr.length;
let p=true;
while(p){
    let uip=prompt("enter your choice");
    let cip=arr[Math.floor(Math.random()*n)]
    if(uip==cip){
        alert("tie. "+cip+" was the choice from the system");
    }
    if((uip=='p' && cip=='r')||(uip=='s' && cip=='p')||(uip=='r' && cip=='s')){
        alert("you win. "+cip+" was the choice from the system");
    }
    if((uip=='r' && cip=='p')||(uip=='p' && cip=='s')||(uip=='s' && cip=='r')){
        alert("you lose. "+cip+" was the choice from the system");
    }

    p=confirm("do you want to play the game again");
}