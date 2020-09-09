const app = new Vue({
    el: '#app',
    data: {
        contador: 0
    },
    // Indicar las propiedades computadas
    computed: {
        // Agregar la propiedad computada para cambiar color
        color(){
            // Retornar un objeto con las condiciones para cambiar de color
            return {
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador > 10 && this.contador < 20,
                'bg-danger' : this.contador >= 20,
            };
        }
    }
})