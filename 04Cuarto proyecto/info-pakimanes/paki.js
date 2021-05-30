//en var imagenes estamos creando un array, que nos permitirá agregar distintos datos a una misma variable, que en este caso es la variable imagenes
//en la variable imagenes guardamos los datos de ubicación de tres objetos: cauchin, pokacho y tocinauro.

var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

//en var coleccion tambien creamos un array, y dentro de este array hay un metodo .push que transforma un array añadiendo cualquier grupo de elementos
//en este caso el .push en el array coleccion (coleccion.push) permite agregar la clase "Pakiman", y esta clase incluye dentro de si un constructor con las variables nombre, vida, ataque, y tipo (n, v, a ,t)
//se crean tres arrays con metodo coleccion.push para incluir a los tres pakimanes que van a aparecer en el document

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30, "campo"));
coleccion.push(new Pakiman("Pokacho", 80, 50, "granja"));
coleccion.push(new Pakiman("Tocinauro", 120, 40, "granja"));

//en este ciclo 'for(var variable in/of object){}' solo va a operar por la cantidad de objetos que estan dentro del array. Ese objeto lo va a colocar dentro de var variable
//Cabe resaltar el uso de in/of. El in te trae el indice del array. El of te muestra directamente la instancia, en vez del indice
//En los casos que me sirve el indice usamos in.
//En los casos que me sirve el objeto usamos of.
//El in y el of te sirven para recorrer un objeto por dentro y en ocasiones para recorrer arrays que no conocemos

//en este ciclo 'for(var pakiman of coleccion){}' el objeto "coleccion" (que es un array declarado arriba) va a colocar sus datos en la variable pakiman tantas veces como of lo permita
//como "coleccion" tiene dentro de él 3 objetos, el ciclo for va a iterar la variable pakiman 3 veces para 'mostrar' dichos objetos

//la funcion "mostrar" esta declarada dentro de la clase Pakiman, y permite mostrar los datos de los 3 pakimanes que hemos creando
//los datos que muestra mostrar son: el nombre del pakiman, su vida, su nivel de ataque y el tipo de pakiman que es

for(var pakiman of coleccion)
{
  pakiman.mostrar();
}

//en este ciclo 'for(var x of coleccion[0]){}' el objeto "coleccion[0]" (que es el primer indice del array declarado arriba) va a colocar su primer indice en la variable x, y lo va a cargar en la consola las veces que sea necesario...

for(var x in coleccion[0])
{
  console.log(x);
}
