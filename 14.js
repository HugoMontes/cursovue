// Definir un nuevo componente llamado saludo
Vue.component('mensaje', {
    // Indicar los props como atributos de etiqueta
    props: ['nombre', 'apellido'],
    // Indicar el contenido de la plantilla a renderizar
    template: '<h2>Buenas noches {{ nombre }} {{ apellido }}</h2>'
})
// Instanciar un objeto vue
const app = new Vue({ 
    el: '#app'
})