// Instanciar un objeto de vue
const app = new Vue({
    // Indicar el elemento html a gestionar por vue
    el: '#app',
    // Data pemite trabajar con los datos
    data: {
      titulo: 'Listado de Frutas',
      // Declarar un array de strings
      frutas: ['Manzana', 'Pera', 'Limon', 'Piña']
    }
})