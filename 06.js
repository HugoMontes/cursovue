const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Listado de Personas',
        // Declarar un array de objetos
        personas: [
            { nombre: 'Mateo', edad: 48 },
            { nombre: 'Marcos', edad: 35 },
            { nombre: 'Lucas', edad: 29 },
            { nombre: 'Juan', edad: 17 }
        ],
        // Declarar un nuevo atributo
        nuevoNombre: '',
    },
    // Adicionar metodos
})