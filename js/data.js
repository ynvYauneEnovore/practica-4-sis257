const itemsPerPage = 6; // Cantidad de elementos por página
let currentPage = 1; // Página actual

const menuItemsContainer = document.querySelector('.menu-container');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');

let menuData = []; // Aquí almacenaremos los datos del menú

// Realizar la solicitud HTTP para obtener los datos del menú
fetch('json/menu.json')
  .then(response => response.json())
  .then(data => {
    menuData = data; // Almacenar los datos en la variable menuData
    displayItems(); // Mostrar la primera página de elementos
  })
  .catch(error => {
    console.error('Error al cargar el menú:', error);
  });

// Función para mostrar elementos de la página actual
function displayItems() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  menuItemsContainer.innerHTML = ''; // Limpiar el contenedor

  menuData.slice(startIndex, endIndex).forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-card';

    // Crear elementos para el nombre, descripción y categoría
    const nameElement = document.createElement('h3');
    nameElement.textContent = item.nombre;

    const descriptionElement = document.createElement('p');
    const limitedDescription = '<div class="descripcion">' + item.descripcion.substring(0, 40) + ' . . .</div>';
    descriptionElement.innerHTML = limitedDescription;

    const priceElement = document.createElement('p');
    priceElement.textContent = `Precio: $${item.precio}`;

    const categoryElement = document.createElement('p');
    categoryElement.innerHTML = '<div class="categoria">' + item.categoria + '</div>';

    // Agregar elementos al contenedor de la tarjeta
    menuItem.appendChild(nameElement);
    menuItem.appendChild(descriptionElement);
    menuItem.appendChild(priceElement);
    menuItem.appendChild(categoryElement);

    menuItemsContainer.appendChild(menuItem);
  });

  updatePaginationButtons();
}

// Función para actualizar los botones de paginación
function updatePaginationButtons() {
  prevPageButton.disabled = currentPage === 1;
  nextPageButton.disabled = currentPage * itemsPerPage >= menuData.length;
}

// Manejadores de eventos para los botones de paginación
prevPageButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayItems();
  }
});

nextPageButton.addEventListener('click', () => {
  if (currentPage * itemsPerPage < menuData.length) {
    currentPage++;
    displayItems();
  }
});
