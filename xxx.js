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
        nuevoNombre: '',
        total: 0,
    },
    // Adicionar un metodos
    methods:{
        agregarNombre () {
            // console.log('Diste clic');
            // Llamar al array y adicionar un nuevo objeto
            this.personas.push({
                nombre: this.nuevoNombre,
                edad: 0
            });
            // Vaciar el campo de nombre
            this.nuevoNombre = '';
        }
    },
    computed:{
        sumaEdades() {
            // Implementar la logica
            this.total = 0;
            for(per of this.personas){
                this.total = this.total + per.edad;
            }
            // Debe retornar un valor
            return this.total;
        }
    }
})