// URL que contiene los datos que queremos mostrar
const DATA_URL = "json/data.json";

// Traemos utilizando el DOM el div de id "container" para colocar la información en él
const container = document.getElementById("container");

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  // Limpiar el contenido del contenedor antes de añadir los nuevos datos
  container.innerHTML = '';

  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String.
    container.innerHTML += `<p>${item.name} ${item.lastname}</p>`; // Se concatena cada párrafo de la manera que queremos mostrarlo al innerHTML del contenedor
  }
}

// Realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData

fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error' + response.statusText);
    }
    return response.json(); 
  })
  .then(data => {

    showData(data.students); 
  })
  .catch(error => {
    console.error('Hubo un error en el fetch', error);
  });
