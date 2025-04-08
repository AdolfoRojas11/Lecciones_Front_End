/*
    Usted tiene vector de estudiantes
    let estudiantesClase = ["Kendall", "Alejandra", "Kevin", "Marco", "Adolfo", "Maxwell", "Alexander", "Sebantian"];
    Yo necesito buscar un nombre en específico
                        Maxwell
    Necesito que me diga en qué posición del vector está él
*/

// Vector de estudiantes
let estudiantesClase = ["Kendall", "Alejandra", "Kevin", "Marco", "Adolfo", "Maxwell", "Alexander", "Sebantian"];

// Nombre que queremos buscar
let nombreBuscado = "Maxwell";

// Usamos indexOf para encontrar la posición
let posicion = estudiantesClase.indexOf(nombreBuscado);

// Verificamos si se encontró o no
if (posicion !== -1) {
    console.log(nombreBuscado + " está en la posición: " + posicion);
} else {
    console.log(nombreBuscado + " no está en la lista de estudiantes.");
}
