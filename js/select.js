// Función para cargar las opciones del menú desplegable desde un archivo JSON
function cargarOpciones() {
    // Ruta al archivo JSON de opciones
    const jsonFile = 'json/pais.json';
  
    // Seleccionar el elemento select y el campo de búsqueda
    const countryFilter = document.getElementById('country-filter');
    const searchInput = document.getElementById('search-input');
    const priceRange = document.getElementById('price-range');
  
    // Realizar una solicitud HTTP para obtener el archivo JSON
    fetch(jsonFile)
      .then(response => response.json())
      .then(data => {
        // Recorrer los datos y agregar las opciones al menú desplegable
        data.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option.value;
          optionElement.textContent = option.label;
          countryFilter.appendChild(optionElement);
        });
  
        // Agregar un evento de entrada en el campo de búsqueda para filtrar las opciones
        searchInput.addEventListener('input', function() {
          const searchTerm = searchInput.value.toLowerCase();
          Array.from(countryFilter.options).forEach(option => {
            const label = option.textContent.toLowerCase();
            if (label.includes(searchTerm) || searchTerm === '') {
              option.style.display = 'block';
            } else {
              option.style.display = 'none';
            }
          });
        });

        priceRange.addEventListener('input', function() {
          const selectedPrice = priceRange.value;
          // Aquí puedes usar el valor de 'selectedPrice' para filtrar opciones por precio
        });
        
      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });
  }
  
  // Llamar a la función para cargar las opciones cuando se cargue la página
  cargarOpciones();
  