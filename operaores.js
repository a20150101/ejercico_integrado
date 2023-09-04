alert("Bienvenido a el restaurante piña colada");
//Ingresar datos
var num1 = parseInt (prompt("Ingrese el costo de la entrada") );
var num2 = parseInt (prompt("Ingrese el costo del segundo") );
var num3 = parseInt (prompt("Ingrese el del postre") );
alert ("Revise el total en la consola presionando F12");


//Procesar Datos
var postre = num3;
var entrada = num1;
var segundo = num2;
var total = num1 + num2 + num3;
var igv = (total*0.18)+total;

//Moarar Datos
console.log("El costo de la entrada es: " + entrada);
console.log("El costo del segundo es: " + segundo);
console.log("El cosoto del postre es: " + postre);
console.log("El total es: " + total);
console.log("El total con igv es: " + igv);
