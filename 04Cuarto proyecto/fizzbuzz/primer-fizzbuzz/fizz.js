// el ciclo for nos servira para iterar la variable i, que es igual a la cuenta de numeros del 1 al 100
// for funciona así: for(variable = valor inicial; variable (aquí va una condicional) valor limite del ciclo; variable++ (es decir, que la variable va a sumar más uno (++) mientras que la condicion sea verdadera))
for(var i = 1; i <= 100; i++)
{
  // condicionales(if's)
  if(esDivisible(i, 3) && esDivisible(i, 5))//aquí nos dice que si la funcion 'esDivisible' entre i y 3 se cumple y (&&) 'esDivisible' se cumple entre i y 5 escribirá en el document "FizzBuzz"
  {
    document.write("FizzBuzz");
  }
  else if(esDivisible(i, 3))//else if significa que si el primer if no se cumple, else if si lo hará. En este caso nos dice que si 'esDivisible' se cumple entre i y 3 escribirá en el document "Fizz"
  {
    document.write("Fizz");
  }
  else if(esDivisible(i, 5))// Acá dice que si la funcion 'esDivisible' se cumple entre i y 5, escribirá en el document "Buzz"
  {
    document.write("Buzz");
  }
  else if(!esDivisible(i, 3) && !esDivisible(i, 5))//este else if indica que si no (!) se cumple la funcion 'esDivisible' entre i y 3 y tampoco se cumple entre i y 5, escribirá en el document solamente el valor de i
  {
    document.write(i);
  }
  document.write("<br />");//este es un salto de linea que hace que los numeros no queden amontonados :)
}

//funcion que ayuda a establecer de manera mas legible la operacion de modulo
// las variables que cambian en la operacion del modulo (%) son: número y divisor (por ej. 15 % 5 = 0, porque 15 dividido entre 3 da 5, y nos queda como residuo 0)
function esDivisible(num, divisor)
{
  if(num % divisor == 0)
  {
    return true;//La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función. En este caso "return true;". La expresion true permite que cuando la funcion sea declarada en otro espacio del codigo, el siguiente bloque de codigo se cumplirá sin ningun problema
  }
  return false;
}