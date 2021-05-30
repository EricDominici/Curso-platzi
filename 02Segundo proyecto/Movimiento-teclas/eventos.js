var teclas = { // variable tipo JSON que contiene las flechas del teclado en keycode
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  
  document.addEventListener("keydown", dibujarTeclado);
  var cuadrito = document.getElementById("area_de_dibujo");
  var papel = cuadrito.getContext("2d");
  var x = 100;
  var y = 100;
  
  dibujarLinea("red", x-1, y-1, x+1, y+1, papel); // Esta funcion indica la posicion del trazo de inicio en el canvas
  
  function dibujarLinea(color, xi, yi, xf, yf, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xi,yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();
  }
  
  function dibujarTeclado(evento)
  {
    var colorsito = "blue";
    var movimiento = 1;
    switch(evento.keyCode) // Condicional switch en donde definimos lo que pasará si las flechas del teclado son oprimidas
    {
      case teclas.UP:
        dibujarLinea(colorsito, x, y, x, y - movimiento, papel);
        y = y - movimiento; // aquí y en espacios similares se indica la posición final del trazo
      break;
      case teclas.DOWN:
        dibujarLinea(colorsito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
      break;
      case teclas.LEFT:
        dibujarLinea(colorsito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
      break;
      case teclas.RIGHT:
        dibujarLinea(colorsito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
      break;
    }
  }
 