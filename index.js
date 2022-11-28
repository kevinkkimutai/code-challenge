function genGrade () {
    /* passing in a value from htmlpage */
    let marks = document.getElementById('marks').value;
    if(document.getElementsByTagName('input').value==""){
        alert("Please Enter Some Value");
    }
    let mark = marks;
    if (marks <= 100 && marks >= 80) {
        document.getElementById("grade").innerHTML = "A";
    }
    else if(marks <= 79 && marks >= 60){
        document.getElementById("grade").innerHTML = "B";
    }
    else if(marks <= 59 && marks >= 50){
        document.getElementById("grade").innerHTML = "C";
    }
    else if(marks <= 49 && marks >= 40){
        document.getElementById("grade").innerHTML = "D";
    }
    else if(marks < 40 && marks >= 1){
        document.getElementById("grade").innerHTML = "E";
    }
    else if (marks > 100) {
        document.getElementById("grade").innerHTML = "invalid";
        
    }
    else if (marks < 0) {
        document.getElementById("grade").innerHTML = "invalid";
    } 

    if (mark <= 100 && mark > 0) {
        document.getElementById('markss').innerHTML = mark;
    }
    else{
        document.getElementById("markss").innerHTML = "invalid";
    }
       
    }
    