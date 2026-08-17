// Usa for...of y for...in para calcular la media del volumen de todos los 
// sonidos favoritos que tienen los usuarios (la media de todos los volúmenes juntos).

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// Bucle for...of (para el array) + for...in (para el objeto) abstraído
function calculateAverageSoundVolume(userList, soundsProperty = 'favoritesSounds') {
  // Validación de seguridad para la abstracción (Edge case)
  if (!Array.isArray(userList) || userList.length === 0) return 0;

  let totalVolume = 0;
  let totalSoundsCount = 0;

  // for...of para iterar sobre el array de usuarios
  for (const user of userList) {
    if (user && user[soundsProperty] && typeof user[soundsProperty] === 'object') {
      const soundsObj = user[soundsProperty];

      // for...in para iterar sobre las claves del objeto de sonidos favoritos
      for (const soundKey in soundsObj) {
        if (Object.prototype.hasOwnProperty.call(soundsObj, soundKey)) {
          const sound = soundsObj[soundKey];

          if (sound && typeof sound.volume === 'number') {
            totalVolume += sound.volume;
            totalSoundsCount++;
          }
        }
      }
    }
  }

  // Prevención de división por cero
  if (totalSoundsCount === 0) return 0;

  const average = totalVolume / totalSoundsCount;

  // Redondeamos a 2 decimales para garantizar precisión matemática
  return Number(average.toFixed(2));
}

console.log("--- OPCIÓN 1 (Combinación for...of y for...in) ---");
const averageVolume = calculateAverageSoundVolume(users);
console.log(`Media del volumen de todos los sonidos favoritos: ${averageVolume}`);