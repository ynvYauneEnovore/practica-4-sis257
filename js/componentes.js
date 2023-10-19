function loadComponent(url, targetSelector) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(targetSelector).insertAdjacentHTML('beforeend', data);
        });
}

// Cargar los componentes en orden
Promise.all([
    loadComponent('/componentes/header.html', '#header'),
    loadComponent('/componentes/footer.html', '#footer'),
    loadComponent('/componentes/menu.html', '#menu'),
    loadComponent('/componentes/carrusel.html', '#carrusel'),
    loadComponent('/componentes/filtros.html', '#filtros')
])
.catch(error => {
    console.error('Error al cargar componentes:', error);
});