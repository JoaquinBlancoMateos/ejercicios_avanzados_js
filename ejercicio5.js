// Crea una función llamada rollDice() que reciba como parámetro el número de caras
// del dado y simule una tirada de dado devolviendo un número entero aleatorio entre 1 y el número de caras.

// OPCIÓN 1: Función imperativa abstraída con validación y valor por defecto
function rollDice(numFaces = 6) {
  // Validación de seguridad para la abstracción (Edge cases)
  // El número de caras debe ser un número entero mayor o igual a 1
  if (typeof numFaces !== 'number' || numFaces < 1 || isNaN(numFaces)) {
    console.warn("Número de caras no válido. Usando dado estándar de 6 caras.");
    numFaces = 6;
  }

  // Math.random() genera un número decimal en el rango [0, 1) (incluye 0, excluye 1)
  // Al multiplicar por numFaces obtenemos un rango decimal [0, numFaces)
  // Math.floor() redondea hacia abajo al entero más cercano: 0 a numFaces - 1
  // Sumamos +1 para desplazar el rango a: 1 a numFaces (inclusive)
  const result = Math.floor(Math.random() * Math.floor(numFaces)) + 1;

  return result;
}

console.log("--- OPCIÓN 1 (Simulación de tiradas de dado) ---");

// Pruebas con distintos tipos de dados:
console.log("Dado estándar (D6):", rollDice());          // Resultado entre 1 y 6
console.log("Dado de rol (D20):", rollDice(20));       // Resultado entre 1 y 20
console.log("Dado porcentual (D100):", rollDice(100));   // Resultado entre 1 y 100
console.log("Lanzamiento de moneda (D2):", rollDice(2)); // Resultado 1 o 2

// Prueba de tiradas múltiples para verificar distribución y límites
console.log("\nSimulación de 5 tiradas con dado de 12 caras (D12):");
const d12Results = [];
for (let i = 0; i < 5; i++) {
  d12Results.push(rollDice(12));
}
console.log("Resultados:", d12Results.join(", "));