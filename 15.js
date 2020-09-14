Vue.component('mensaje', {
    props: ['nombre', 'apellido'],
    template: '<h2>Buenas noches {{ nombre }} {{ apellido }}</h2>'
})
// Instanciar un objeto vue
const app = new Vue({ 
    el: '#app',
    data: {
        // Declarar un array de objetos
        personas: [
            { nombre: 'Juan', apellido: 'Perez' },
            { nombre: 'Pedro', apellido: 'Gomez' },
            { nombre:'Lucas', apellido: 'Lopez' }
        ]
    }
})