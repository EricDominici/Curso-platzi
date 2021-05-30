//VARIABLES PARA TRAER DATOS DEL USUARIO

var peso = prompt("¿Cuál es tu peso?");
var planeta = prompt("Escribe la posición del planeta en nuestro sistema sola del 1 al 9 \n1. Mercurio \n2. Venus \n3. Tierra \n4. Marte \n5. Jupiter \n6. Saturno \n7. Urano \n 8. Neptuno \n9. Plutón");

//VARIABLES DE GRAVEDAD EN PLANETAS

var g_mer = 3.7;
var g_ven = 8.87;
var g_tie = 9.8;
var g_mar = 24.8;
var g_jup = 24.8;
var g_sat = 10.44;
var g_ura = 8.7;
var g_nep = 11.15;
var g_plu = 0.62;

//VARIABLES GLOBALES

var nombre;
var peso_final;

//CONDICIONAL TERNARIO PARA OPERACIONES DE GRAVEDAD

planeta == 1 ? peso_final = g_mer * peso / g_tie: planeta == 2 ? peso_final = g_ven * peso / g_tie: planeta == 3 ? peso_final = peso: planeta == 4 ? peso_final = g_mar * peso / g_tie: planeta == 5 ? peso_final = g_jup * peso / g_tie: planeta == 6 ? peso_final = g_sat * peso / g_tie: planeta == 7 ? peso_final = g_ura * peso / g_tie: planeta == 8 ? peso_final = g_nep * peso / g_tie: planeta == 9 ? peso_final = g_plu * peso / g_tie: peso_final = 9999999999999999;

//CONDICIONAL TERNARIO PARA EL NOMBRE DEL PLANETA

planeta == 1 ? nombre = "Mercurio": planeta == 2 ? nombre = "Venus": planeta == 3 ? nombre = "Tierra": planeta == 4 ? nombre = "Marte": planeta == 5 ? nombre = "Jupiter": planeta == 6 ? nombre = "Saturno": planeta == 7 ? nombre = "Urano": planeta == 8 ? nombre = "Neptuno": planeta == 9 ? nombre = "Plutón": nombre = "Kryptón";

//SALIDA DE DATOS POR PANTALLA EN EL DOCUMENT...

peso_final = parseInt(peso_final);
document.write("Su peso en el planeta " + nombre + " es: " + peso_final + "kg");