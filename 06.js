const app = new Vue({
    el: '#app',
    data: {
        titulo: 'METODOS Y EVENTO CLICK',
        nombre: '',
        mensaje: ''
    },
    // Adicionar un metodo
    methods:{
        saludarAction () {
            // console.log('Diste clic');
            // Obtener el nombre, concatenar y guardarlo en mensaje
            this.mensaje = 'Buenas noches ' + this.nombre;
        }
    }
})