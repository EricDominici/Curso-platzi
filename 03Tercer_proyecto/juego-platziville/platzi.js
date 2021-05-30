var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
  //teclas
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK)
  {
    for (v = 0; v < 10; v++)
    {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
    }
  }

  if(cerdo.cargaOK)
  {
    document.addEventListener("keydown", moverCerdo);

    var x = aleatorio(0, 5);
    var y = aleatorio(0, 5);
    var xi = x * 80;
    var yi = y * 80;

    papel.drawImage(cerdo.imagen, x, y);

    function moverCerdo(evento)
    {
      var movimiento = 1;
      switch(evento.keyCode)
      {
        case cerdo.UP:
          papel.drawImage(cerdo.imagen, xi, yi -1);
          console.log(cerdo);
        break;
        case cerdo.DOWN:
          dibujarLinea(colorsito, x, y, x, y + movimiento, papel);
          y = y + movimiento;
        break;
        case cerdo.LEFT:
          dibujarLinea(colorsito, x, y, x - movimiento, y, papel);
          x = x - movimiento;
        break;
        case cerdo.RIGHT:
          dibujarLinea(colorsito, x, y, x + movimiento, y, papel);
          x = x + movimiento;
        break;
      }
    }
  }

  if(pollo.cargaOK)
  {
    for (p = 0; p < 10; p++)
    {
    var x = aleatorio(0, 5);
    var y = aleatorio(0, 5);
    var x = x * 80;
    var y = y * 80;
    papel.drawImage(pollo.imagen, x, y);
    }
  }
}

function movepig()
{

}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
