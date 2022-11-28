function demerit () {
    let speed = document.getElementById("speed").value;
    let over = (speed - 70);
    let points = (over / 5) * 1;
    if(document.getElementsByTagName('input').value==""){
        alert("Please Enter Some Value");
    }

    if (speed <= 70) {
        document.getElementById("limit").innerHTML = "Speed limit:OK";
    }

    else if (speed >= 71 && speed <= 130) {
        document.getElementById("limit").innerHTML = `Demerit Points: ${points}`
    }
    
    else if (speed >= 130) {
        document.getElementById("limit").innerHTML = "Licence Suspended"
    }
    

}