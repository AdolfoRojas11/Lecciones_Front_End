
var nombre1 = "Adolfo";
var nombre2 = "AdolFo";

nombre1 = nombre1.toUpperCase()   /* El método toUpperCase() es una función que 
                                    se usa con cadenas de texto (strings) y sirve 
                                    para convertir todo el texto a mayúsculas.*/ 
nombre2 = nombre2.toUpperCase()

if(nombre1 == nombre2){ 
    console.log("Ambas palabras son iguales");
}
else {
    console.log("Las palabras no son iguales");
}

//Otro ejemplo

let saludo = "Hola amigo";
let saludoEnMayusculas = saludo.toUpperCase();

console.log(saludoEnMayusculas); // "HOLA AMIGO"

// Si quieres todo en minúsculas, usarías toLowerCase(), el contrario.

console.log("HOLA MUNDO".toLowerCase()); // "hola mundo"
