var cuadrito = document.getElementById("dibujoConCanvas");
var papel = cuadrito.getContext("2d");

var colorGeneral = "green";
var estadoMouse = 0;
var x;                      // guardar coordenada en X
var y;                      // guardar coordenada en Y

document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

// Funcion para mousemove
function dibujarMouse(evento)
{
  if (estadoMouse == 1)    // solo se dibujara si esta el click del mouse presionado
  {
    dibujarLinea(colorGeneral, x, y, evento.offsetX, evento.offsetY, papel);
  }
  x = evento.offsetX;
  y = evento.offsetY;
  console.log(estadoMouse);
}

// Funcion para mousedown
function presionarMouse(evento)
{
  estadoMouse = 1;      //click presionado
  console.log(estadoMouse);
}

// Funcion para mouseup
function soltarMouse(evento){
  estadoMouse = 0;         // click suelto
  console.log(estadoMouse);
}

function dibujarLinea(color, xi, yi, xf, yf, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLinea("green", 0, 0, 0, 300, papel);
dibujarLinea("green", 0, 0, 300, 0, papel);
dibujarLinea("green", 300, 0, 300, 300, papel);
dibujarLinea("green", 0, 300, 300, 300, papel);