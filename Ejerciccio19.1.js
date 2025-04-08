/*
Queremos ir al parque mis hermanos y yo
Si la hora es mayor a las 15 y esta mi papa o esta mi mama
podemos ir
 */

// Variables (pueden ser asignadas manualmente )
var ora = parseInt(prompt("¿Qué hora es? (solo número, formato 24h): "));
var pa = confirm("¿Está tu papá?");
var Mama = confirm("¿Está tu mamá?");

// Condición para ir al parque
if (hora >=15 && (estaPapa || estaMama)) {
    console.log("¡Podemos ir al parque! 🏞️🎉");
} else {
    console.log("No podemos ir al parque 😢");
}
