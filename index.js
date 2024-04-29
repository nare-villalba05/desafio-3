let nombreProducto="Remeras"
let precioUnitario=200
let cantidadDeseada= parseInt(prompt("Ingrese la cantidad de "+ nombreProducto+"que desea comprar:"));
let costotalSinDescuentos= precioUnitario * cantidadDeseada;

if (cantidadDeseada >=5){
    costotalSinDescuentos *=0.9;
}
 alert ("El costo total de " + cantidadDeseada + " "+ nombreProducto + " es: $" + costotalSinDescuentos.toFixed(2));