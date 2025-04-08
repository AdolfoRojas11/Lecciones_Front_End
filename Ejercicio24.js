//Vamos del 1 al 10 con con un ciclo for


for( var i=1; i<=10; i++ ){
    console.log(" El numero por el que voy es: ", i);
}

// Ejercicio Usando un ciclo for, dígame cuantos valores pares hay entre el 1 y el 20


for( var i=1; i>=10; i-- ){
    console.log(" El numero por el que voy es: ", i);
}


// Variable para contar los pares
let contadorPares = 0;

// Ciclo for desde 1 hasta 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) { // Verifica si el número es par
        contadorPares++; // Suma 1 al contador
    }
}

// Mostrar el resultado
console.log("Cantidad de números pares entre 1 y 20: " + contadorPares);



// metodo del profesor


for( var t =1; t<=20; t++)
    {
    if( t%2 == 0)
        cantidadDePares++;
    }
console.log( "La cantidad de pares es:", cantidadDePares);