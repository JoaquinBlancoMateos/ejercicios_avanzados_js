// 1. Crea una función llamada findArrayIndex que reciba como parámetros 
// un array de textos y un texto, y devuelva la posición del array cuando el valor 
// del array sea igual al valor del texto. Devuelve -1 si no se encuentra.

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// OPCIÓN 1: Implementación con bucle for tradicional (Abstraída e insensible a mayúsculas)
function findArrayIndex(array, text) {
  // Validación de seguridad para casos límite (edge cases)
  if (!Array.isArray(array) || typeof text !== 'string') {
    return -1;
  }

  const normalizedText = text.trim().toLowerCase();

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (typeof item === 'string' && item.trim().toLowerCase() === normalizedText) {
      return i; // Devolvemos el índice exacto en cuanto lo encontramos
    }
  }

  return -1; // Convención estándar en JS cuando un elemento no existe
}

console.log("--- OPCIÓN 1 (Bucle imperativo tradicional) ---");

// Pruebas y comprobaciones:
console.log(`Índice de 'Rey':`, findArrayIndex(mainCharacters, "Rey"));            // 4
console.log(`Índice de 'Luke':`, findArrayIndex(mainCharacters, "luke"));          // 0 (Tolera minúsculas)
console.log(`Índice de 'Obi-Wan':`, findArrayIndex(mainCharacters, "Obi-Wan"));    // 6
console.log(`Índice de 'Yoda':`, findArrayIndex(mainCharacters, "Yoda"));          // -1 (No existe)



// 2. Crea la función removeItem(array, text) que utilice la función findArrayIndex
// desarrollada anteriormente para obtener el índice del elemento y eliminarlo del array
// mediante .splice(). Retorna el array actualizado o una copia modificada.



//Función inmutable (Crea una copia para no alterar el array original)
function removeItem(array, text) {
  // Validación de seguridad para casos límite (edge cases)
  if (!Array.isArray(array)) return [];

  // Obtenemos el índice reutilizando la función findArrayIndex
  const index = findArrayIndex(array, text);

  // Copiamos el array para mantener inmutabilidad como buena práctica
  const updatedArray = [...array];

  // Si el elemento existe (índice diferente de -1), lo eliminamos con .splice()
  if (index !== -1) {
    updatedArray.splice(index, 1);
  } else {
    console.warn(`El elemento "${text}" no se encontró en el array.`);
  }

  return updatedArray;
}

console.log("--- OPCIÓN 1 (Inmutable: Preserva el array original) ---");

// Pruebas y comprobaciones:
const listWithoutRey = removeItem(mainCharacters, "Rey");
console.log("Lista sin 'Rey':", listWithoutRey);

const listWithoutLuke = removeItem(mainCharacters, "luke"); // Tolera minúsculas
console.log("Lista sin 'Luke':", listWithoutLuke);

const listNonExistent = removeItem(mainCharacters, "Yoda"); // Elemento que no existe
console.log("Intento con 'Yoda':", listNonExistent);

console.log("Array original intacto:", mainCharacters);
