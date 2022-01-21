/*Part 2 HTML

Create an HTML page that has 2 input boxes: one for name and another for age. When someone enters a name and age, the page will show a list of "{Name}, {x} years old". */

var nombre = prompt("Ingresa tu nombre: ");
var edad = prompt("Ingresa tu edad: ");

let ourData = new Person(nombre,edad);

document.getElementById("person").innerHTML = ourData.Describe();