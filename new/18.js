/*First we are creating an array*/
let students=["Abhik","Abimanyu","Abinas"]

const enrollstudent=(student,callback)=>{
    setTimeout(function(){
        students.push(student);
        console.log("Student enrolled");
        callback();
    },1000);
}

const getstudents=()=>{
    let str='';
    setTimeout(function(){
        students.forEach(function(student){
            str+=`<li>${student}</li>`
        });
        document.getElementById('students').innerHTML=str;
        console.log('student fetched');
    },3000)
}

let new_student="Achut"

enrollstudent(new_student,getstudents);