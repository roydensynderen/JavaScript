let body = document.querySelector("body");
let square = document.createElement("div");
square.innerText = "CLICK HERE!";
body.appendChild(square);

square.style.border = "15px solid blue";
square.style.padding = "100px";
square.style.display = "inline-block";
square.style.width = "12.5%";
square.style.marginLeft = "34.5%";
square.style.marginTop = "15%";
square.style.textAlign = "center";
square.style.fontSize = "50px";
square.style.fontFamily = "arial";
square.style.color = "purple";
square.style.fontStyle = "italic";
square.style.fontWeight = "bold";

square.addEventListener("mouseover", function(event) {
    this.style.backgroundColor = "blue";
})

square.addEventListener("mouseup", function(event) {
    this.style.backgroundColor = "yellow";
})

square.addEventListener("dblclick", function(event) {
    this.style.backgroundColor = "green";
})

square.addEventListener("mousedown", function(event) {
    this.style.backgroundColor = "red";
})

square.addEventListener("mouseleave", function(event) {
    this.style.backgroundColor = "orange";
})