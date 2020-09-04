// Instanciar un objeto de vue
const app = new Vue({
    // Indicar el elemento html a gestionar por vue
    el: '#app',
    data: {
        titulo: 'DIRECTIVA V-IF',
        // Atributo de ejemplo para directiva v-if
        ver: true,
        // Atributo de ejemplo para directiva v-else
        edad: 15,
        // Atributo de ejemplo para directiva v-else-if
        palabra: 'manzana'
    }
})