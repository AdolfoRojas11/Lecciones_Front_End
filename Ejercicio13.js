
var numero1 = 8;
var numero2 = 7;
var operacion = "*";


switch(operacion){
    case "+":
        console.log("El resultado es:", numero1+numero2);
        break;
    case "-":
        console.log("El resultado es:", numero1-numero2);
        break;
    case "*":
        console.log("El resultado es:", numero1*numero2);
        break;
    case "/":
        console.log("El resultado es:", numero1/numero2);
        break;
    default:
        console.log("No hay una opcion valida");
}