// Crea una función llamada swap(array, index1, index2) que reciba un array 
// y dos índices, e intercambie la posición de los valores en dichos índices.
// Retorna el array con los elementos intercambiados.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

// Intercambio inmutable mediante Sintaxis de Desestructuración (ES6)
function swap(array, index1, index2) {
  // Validación de seguridad para casos límite (edge cases)
  if (!Array.isArray(array)) return [];

  const len = array.length;

  // Verificamos que ambos índices sean números enteros válidos y estén dentro del rango
  const isValidIndex1 = typeof index1 === 'number' && index1 >= 0 && index1 < len;
  const isValidIndex2 = typeof index2 === 'number' && index2 >= 0 && index2 < len;

  if (!isValidIndex1 || !isValidIndex2) {
    console.warn("Uno o ambos índices están fuera de rango o no son válidos.");
    return [...array]; // Retornamos copia sin modificar
  }

  // Creamos una copia para mantener inmutabilidad
  const updatedArray = [...array];

  // Intercambio idiomático moderno de ES6 (Destructuring assignment)
  [updatedArray[index1], updatedArray[index2]] = [updatedArray[index2], updatedArray[index1]];

  return updatedArray;
}

console.log("--- OPCIÓN 1 (Inmutable con Desestructuración ES6) ---");

console.log("Array original:", fantasticFour);

// Intercambiamos "La antorcha humana" (índice 0) con "La cosa" (índice 3)
const swappedArray = swap(fantasticFour, 0, 3);
console.log("Array intercambiado (0 y 3):", swappedArray);

// Comprobamos que el array original no ha sido modificado
console.log("Array original intacto:", fantasticFour);