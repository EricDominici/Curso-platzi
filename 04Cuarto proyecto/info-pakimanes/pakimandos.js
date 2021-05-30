class Pakiman  // esta clase Pakiman contiene dentro métodos y datos que resumen las caracteristicas de este, el objeto Pakiman. Definir clases permite trabajar con codigo reutilizable
{
  constructor(n, v, a, t)   // constructor funciona igual que una funcion, pero no es una función; constructor es un método que se dispara cuando se esta creando el objeto Pakiman. Funciona igual que una funcion, ya que en él pueden ir variables como n, v, a, t, en este caso
  {
    this.imagen = new Image(); // this. es un indicador de la instancia en que estoy. this.imagen quiere decir que la instancia que sea de clase Pakiman va a tener una variable .imagen. new Image() sirve para declarar una nueva imagen en JavaScript
    this.nombre = n; // this.nombre nos servirá para definir la variable nombre de nuestros pakimanes. Por ejemplo: this sería el pakiman, y el .nombre sería, efectivamente el nombre del Pakiman
    this.vida = v; // this.vida nos permite definir el nivel de vida de nuestros pakimanes
    this.ataque = a; // this.ataque nos permite definir el nivel de ataque de nustros pakimanes
    this.tipo = t; // this.tipo nos permite definir qué tipo de pakiman es nuestro "pakimnan". p. ej. tipo agua, tierra, aire, maestro de fuego, etc...

    this.imagen.src = imagenes[this.nombre];// this.imagen.src nos permite crear una nueva variable para nuestra clase Pakiman, ahora incluyendo el source de la imagen ( .src); el .src nos sirve en JavaScript para buscar en nuestro "servidor", que en este caso sería nuestra carpeta, cualquier archivo que esté en este
  }
  hablar() // aquí declaramos otro método aparte del constructor. Un método es una acción que puede realizar un objeto. En este caso, el método "hablar()" tiene como acción mandar un alert...
  {
    alert(this.nombre);
  }
  mostrar() // de nuevo, declaramos un método "mostrar()" que nos servirá para mostrar los datos de nuestros pakimanes en el document (de ahí a que utilicemos document.write)
  {
    document.body.appendChild(this.imagen); // document.body.appendChild es un ejemplo del Document Object Model; en primer lugar llamamos a el document. luego decimos en qué etiqueta del document (HTML) queremos generar el appendChild, y decimos que en .body. Y por último generamos el appendChild, que es una función que te agrega 'hijos' al document, es decir, nuevos datos
    document.write("<p>"); //aquí se abre un parrafo con etiquetas HTML
    document.write("<strong>" + this.nombre + "</strong><br />"); //  la etiqueta strong nos sirve para hacer negrita en general un texto; this.nombre será un valor concatenado junto a este strong, y mostrará el nombre de los pakimanes; la etiqueta br hace un salto de linea para este elemento y cualquier elemento
    document.write("Vida: " + this.vida + "<br />"); // de nuevo, estamos concatenando texto y elementos de la clase Pakiman. this.vida indicará el nivel de vida del Pakiman
    document.write("Ataque: " + this.ataque + "<br />"); // concatenando texto con elementos de la clase Pakiman; concatenamos el texto "ataque" junto al valor de la instancia.ataque en la clase Pakiman
    document.write("Tipo: " + this.tipo + "<hr />") // hacemos lo mismo que en los anteriores elementos. La etiqueta hr traza una linea por debajo del último dato declarado
    document.write("</p>"); //aquí se cierra un parrafo con etiquetas HTML
  }
}