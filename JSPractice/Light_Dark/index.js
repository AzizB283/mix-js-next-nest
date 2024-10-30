console.log("This is a js file");

let light = document.getElementById("light");

let dark = document.getElementById("dark");

const body = document.querySelector("body");

const h1 = document.querySelector("h1")

console.log(light.value);
console.log(dark.value);

function checkButton(){

    if(light.checked){
        
        body.style.backgroundColor = "white";
        body.style.color = "black";
        h1.style.color = "black";
    }
    else if(dark.checked){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        h1.style.color = "white";
    }
}


