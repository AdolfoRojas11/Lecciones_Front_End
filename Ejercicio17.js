/*
    Los descuento solo aplico cuando es mayor a 100 000
    Si el monto a pagar es mayor a 100 000, le aplico un 2% de descuento
    Si paga con tarjeta y es visa 3% más, es decir un 5% si el monto es mayor
    Si es mastercard le aplico un 1% más
*/

var monto = 150000;
var tarjeta = "visa";


if(monto >= 100000)
{
    if(tarjeta == "visa"){
        console.log("Tiene un descuento de 5%")
    }
    else if(tarjeta == "mastercard"){
        console.log("Tiene un descuento de 3%")
    }
    else{
        console.log("Tiene un 2% de descuento");
    }
}else {
    console.log("No tiene descuento por ser menor a 100000");
}

