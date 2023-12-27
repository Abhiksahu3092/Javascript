/*First we are creating the object*/
const students=[
    {name:"Abhik" , roll:"1"},
    {name:"Abhimanyu" , roll:"2"},
    {name:"Abinas" , roll:"4"}
]

const enrollstudent=(student,callback)=>{
    const fn=()=>{
        students.push(student);
        console.log("Student enrolled");
        callback();
    }

    setTimeout(fn,1000);
}

const getstudents=()=>{
    let str='';
    setTimeout(function(){
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML=str;
        console.log('student fetched');
    },3000)
}

const new_student={name:"Achut" , roll:"5"}

enrollstudent(new_student,getstudents);