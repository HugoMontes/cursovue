const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Listado de Empleados',
        // Declarar un array de objetos
        empleados: [
            { nombre: 'Mateo', sueldo: 4800 },
            { nombre: 'Marcos', sueldo: 3525 },
            { nombre: 'Lucas', sueldo: 8700 },
            { nombre: 'Juan', sueldo: 11000 }
        ]
    }
})