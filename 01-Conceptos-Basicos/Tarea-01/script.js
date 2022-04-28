//Realizar un algoritmo en Javascript que permita calcular la suma, 
//resta, multiplicación y división de dos números, 
//donde num1 = 5 y num2 = 7. Mostrar los resultados por consola.

let num1 = 5,
    num2 = 7;
const sum = num1 + num2
const resta = num1 - num2
const multi = num1 * num2
const division = num1 / num2
console.log("Suma " + num1 + " y " + num2 + " is: " + sum)
console.log("Resta " + num1 + " y " + num2 + " is: " + resta)
console.log("Multiplicacion " + num1 + " y " + num2 + " is: " + multi)
console.log("Division " + num1 + " y " + num2 + " is: " + division)


//write in DOM , also called HTML
document.write("Suma " + num1 + " y " + num2 + " is: " + sum + "<br>");
//para nueva linea
document.write("Resta " + num1 + " y " + num2 + " is: " + resta + "<br>");
document.write("Multiplicacion " + num1 + " y " + num2 + " is: " + multi + "<br>");
document.write("Division " + num1 + " y " + num2 + " is: " + division + "<br>");