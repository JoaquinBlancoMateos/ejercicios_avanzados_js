// Usa for...of y for...in para saber cuántas veces ha sido cada sonido 
// agregado por los usuarios a favoritos. Devuelve un objeto donde la clave sea el 
// nombre del sonido y el valor sea el conteo total.

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

//  Bucle for...of (para el array) + for...in (para el objeto) abstraído
function countFavoriteSounds(userList, soundsProperty = 'favoritesSounds') {
  // Validación de seguridad para la abstracción (Edge case)
  if (!Array.isArray(userList)) return {};

  const soundCount = {};

  // for...of para iterar sobre el array de usuarios
  for (const user of userList) {
    if (user && user[soundsProperty] && typeof user[soundsProperty] === 'object') {
      const soundsObj = user[soundsProperty];

      // for...in para obtener las claves (nombres de los sonidos: 'waves', 'rain', etc.)
      for (const soundName in soundsObj) {
        if (Object.prototype.hasOwnProperty.call(soundsObj, soundName)) {
          
          // Idioma idiomático de conteo:
          // Si ya existe, incrementamos; si no existe, lo inicializamos en 1
          soundCount[soundName] = (soundCount[soundName] || 0) + 1;
        }
      }
    }
  }

  return soundCount;
}

console.log("--- OPCIÓN 1 (Combinación for...of y for...in) ---");
const soundFrequencies = countFavoriteSounds(users);
console.log(soundFrequencies);