//variable teclas: sirve para declarar las teclas que serán usadas en el codigo del programa :)
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  
  //Evento que hace mover a la imagen de cerdo dentro de la villa :)
  document.addEventListener("keydown", moverCerdo);
  
  //variables utilizadas en todo el codigo del programa :), son variables que pueden cambiar con respecto a una funcion o una operacion
  var v = document.getElementById("villa");
  var mapa = v.getContext("2d");
  var x = 0;
  var y = 0;
  var xCerdo = 0;
  var yCerdo = 0;
  
  //variables utilizadas para cargar los dos objetos que van a ser declarados dentro del front-end; se declaran con una sintaxis parecida a la de JSON, y dentro de él van las distintas declaraciones que van a ser utilizadas en el codigo :)
  var fondo = {
    url: "tile.png",
    cargaOK: false
  };
  
  var cerdo = {
    url: "cerdo.png",
    cargaOK: false
  };
  
  //se declaran las estructuras de tipo JSON con un .imagen; se crea primero una nueva imagen, luego se pide la url de la imagen y la tercera linea de codigo lleva a cabo el evento carga de la imagen
  fondo.imagen = new Image();
  fondo.imagen.src = fondo.url;
  fondo.imagen.addEventListener("load", cargarFondo);
  
  cerdo.imagen = new Image ();
  cerdo.imagen.src = cerdo.url;
  cerdo.imagen.addEventListener("load", cargarCerdo);
  
  //funciones de carga de los dos objetos declarados anteriormente como nuevas imagenes; la variable cargaOK pasa de ser falsa (false) a ser verdadera (true)
  function cargarFondo()
  {
    fondo.cargaOK = true;
    dibujar();
  }
  
  //dentro de estas funciones de carga se declara la funcion dibujar(); esta servirá para dibujar estas imagenes
  function cargarCerdo()
  {
    cerdo.cargaOK = true;
    dibujar();
  }
  
  //la funcion dibujar servira para obtener los datos de salida de las dos imagenes que seran dibujadas :)
  function dibujar()
  {
    if(fondo.cargaOK)
    {
      mapa.drawImage(fondo.imagen, x, y);
    }
    if(cerdo.cargaOK)
    {
      mapa.drawImage(cerdo.imagen, xCerdo, yCerdo);
    }
  }
  
  //Esta funcion, como su nombre lo indica, moverá a la imagen del cerdo, y tiene una variable movimiento que es igual a el numero de pixeles que se moverá en pantalla.
  function moverCerdo(evento)
  {
    var movimiento = 4;
    switch(evento.keyCode)
    {
      case teclas.UP:
        dibujar(cerdo.imagen, xCerdo, yCerdo);
        yCerdo = yCerdo - movimiento; //esta operacion significa que la posicion en y del cerdo es igual a yCerdo menos el movimiento (pixeles que se moverá). Como y es el eje vertical,cuando la flecha para arriba sea oprimida el cerdo disminuirá su posición con respecto al eje y
        console.log("posicion en y = " + yCerdo);
      break;
      case teclas.DOWN:
        dibujar(cerdo.imagen, xCerdo, yCerdo);
        yCerdo = yCerdo + movimiento;
        console.log("posicion en y = " + yCerdo);
      break;
      case teclas.LEFT:
        dibujar(cerdo.imagen, xCerdo, yCerdo);
        xCerdo = xCerdo - movimiento;
        console.log("posicion en x = " + xCerdo);
      break;
      case teclas.RIGHT:
        dibujar(cerdo.imagen, xCerdo, yCerdo);
        xCerdo = xCerdo + movimiento;
        console.log("posicion en x = " + xCerdo);
      break;
    }
  }//variable teclas: sirve para declarar las teclas que serán usadas en el codigo del programa :)
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

//Evento que hace mover a la imagen de cerdo dentro de la villa :)
document.addEventListener("keydown", moverCerdo);

//variables utilizadas en todo el codigo del programa :), son variables que pueden cambiar con respecto a una funcion o una operacion
var v = document.getElementById("villa");
var mapa = v.getContext("2d");
var x = 0;
var y = 0;
var xCerdo = 0;
var yCerdo = 0;

//variables utilizadas para cargar los dos objetos que van a ser declarados dentro del front-end; se declaran con una sintaxis parecida a la de JSON, y dentro de él van las distintas declaraciones que van a ser utilizadas en el codigo :)
var fondo = {
  url: "tile.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

//se declaran las estructuras de tipo JSON con un .imagen; se crea primero una nueva imagen, luego se pide la url de la imagen y la tercera linea de codigo lleva a cabo el evento carga de la imagen
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image ();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

//funciones de carga de los dos objetos declarados anteriormente como nuevas imagenes; la variable cargaOK pasa de ser falsa (false) a ser verdadera (true)
function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

//dentro de estas funciones de carga se declara la funcion dibujar(); esta servirá para dibujar estas imagenes
function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

//la funcion dibujar servira para obtener los datos de salida de las dos imagenes que seran dibujadas :)
function dibujar()
{
  if(fondo.cargaOK)
  {
    mapa.drawImage(fondo.imagen, x, y);
  }
  if(cerdo.cargaOK)
  {
    mapa.drawImage(cerdo.imagen, xCerdo, yCerdo);
  }
}

//Esta funcion, como su nombre lo indica, moverá a la imagen del cerdo, y tiene una variable movimiento que es igual a el numero de pixeles que se moverá en pantalla.
function moverCerdo(evento)
{
  var movimiento = 4;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujar(cerdo.imagen, xCerdo, yCerdo);
      yCerdo = yCerdo - movimiento; //esta operacion significa que la posicion en y del cerdo es igual a yCerdo menos el movimiento (pixeles que se moverá). Como y es el eje vertical,cuando la flecha para arriba sea oprimida el cerdo disminuirá su posición con respecto al eje y
      console.log("posicion en y = " + yCerdo);
    break;
    case teclas.DOWN:
      dibujar(cerdo.imagen, xCerdo, yCerdo);
      yCerdo = yCerdo + movimiento;
      console.log("posicion en y = " + yCerdo);
    break;
    case teclas.LEFT:
      dibujar(cerdo.imagen, xCerdo, yCerdo);
      xCerdo = xCerdo - movimiento;
      console.log("posicion en x = " + xCerdo);
    break;
    case teclas.RIGHT:
      dibujar(cerdo.imagen, xCerdo, yCerdo);
      xCerdo = xCerdo + movimiento;
      console.log("posicion en x = " + xCerdo);
    break;
  }
}