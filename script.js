console.log("hola hijos de puta");
console.log("ancho: " + window.innerWidth);
let par;
par = document.getElementById("parrafito");
if (window.innerWidth < 700) {
    par.innerHTML = "menor a 700"; 
}
else {
    par.innerHTML = "mayor o igual a 700 px";
}
let captura;

function setup() {
    createCanvas(750, 600);
    noCursor();
    captura = createCapture(VIDEO);
    captura.hide();
  }
  
  function draw() {
    background(117, 137, 191);
    image(captura, 0, 0, 300, 300);
    ellipse(mouseX, mouseY, 200, 500);
  }
  