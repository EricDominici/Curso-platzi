class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

var imagenes = [];
imagenes["100000"] = "100mil.jpg";
imagenes["50000"] = "50mil.jpg";
imagenes["20000"] = "20mil.jpg";
imagenes["10000"] = "10mil.jpg";
imagenes["5000"] = "5mil.jpg";
imagenes["2000"] = "2mil.jpg";
imagenes["1000"] = "1mil.jpg";

var caja = [];
caja.push( new Billete(100000, 5) );
caja.push( new Billete(50000, 5) );
caja.push( new Billete(20000, 5) );
caja.push( new Billete(10000, 10) );
caja.push( new Billete(5000, 15) );
caja.push( new Billete(2000, 15) );
caja.push( new Billete(1000, 10) );

var entregado = [];

var dinero;
var div;
var papeles;

var cantidad = document.getElementById("cantidad");
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");

b.addEventListener("click", entregarDinero);
cantidad.addEventListener("click", saldo);

function entregarDinero()
{
  resultado.innerHTML = "";
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for(var b of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / b.valor);

      if(div > b.cantidad)
      {
        papeles = b.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push( new Billete(b.valor, papeles) );
      dinero -= (b.valor * papeles);

      b.cantidad -= papeles;
    }
  }

  if(dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero <strong>malo</strong>, he sido <strong>malo</strong> y no puedo darte esa cantidad :( <br /><hr />";
  }
  else
  {
    resultado.innerHTML += "<p>Retiraste:<br /></p>";

    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
        for(var bi = 1; bi <= e.cantidad ;bi++)
        {
          resultado.innerHTML += "<img src=" + e.imagen.src + " />" + "<br /><hr />";
        }
      }
    }
  }
}

function saldo()
{
  var total = 0;

  for(var bi of caja)
  {
    total += bi.valor * bi.cantidad;
  }
  alert("La cantidad actual de dinero es de " + total + "$COP");
}