// Definir un nuevo componente llamado button-counter
Vue.component('button-counter', {
    // Indicar el contenido de la plantilla a renderizar
    // en el documento html, en este caso un boton
    template: '<button v-on:click="count++">Me ha pulsado {{ count }} veces.</button>',
    // Data de un componente debe ser una funcion que retorne los datos
    // esto mantiene una copia independiente del objeto
    data: function () {
        return {
            count: 0
        }
    }   
})
// Instanciar un objeto vue
const app = new Vue({ 
    el: '#app' 
})