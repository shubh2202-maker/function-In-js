function keypress(){
    let press = document.getElementById("box-1");
    press.style.backgroundColor = "red";
}

function keypress1(){
    let press = document.getElementById("box-2");
    press.style.backgroundColor = "blue";
}

function keypress2(){
    let press = document.getElementById("box-3");
    press.style.backgroundColor = "green";
}

function keypress3(){
    let press = document.getElementById("box-4");
    press.style.backgroundColor = "yellow";
}

function addname(){
    let name = document.getElementById("nameInput").value;
    let greeting = document.getElementById("greeting");

    if(name !== ""){
        greeting.innerText = "Hello " + name;
    }
}
