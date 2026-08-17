// Usa un bucle for...of para recorrer el array de películas, 
// genera un nuevo array con las categorías sin repetir e imprímelo por consola.

const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

//  Bucle for...of con validación de categorías e .includes() (Abstraído)
function getUniqueCategories(movieList, categoriesProperty = 'categories') {
  // Validación de datos de entrada (Edge case)
  if (!Array.isArray(movieList)) return [];

  const uniqueCategories = [];

  for (const movie of movieList) {
    if (movie && Array.isArray(movie[categoriesProperty])) {
      // Bucle secundario para recorrer las categorías de cada película
      for (const category of movie[categoriesProperty]) {
        // Evitamos duplicados comprobando si ya existe en el array acumulador
        if (typeof category === 'string' && !uniqueCategories.includes(category)) {
          uniqueCategories.push(category);
        }
      }
    }
  }

  return uniqueCategories;
}

console.log("--- OPCIÓN 1 (Bucle for...of con .includes()) ---");
const categories = getUniqueCategories(movies);
console.log(categories);