const app = new Vue({
    el: '#app',
    data: {
        // Declarar los atributos
        titulo: 'Listado de Productos',
        productos: [
            { nombre: 'Harina', cantidad: 20 },
            { nombre: 'Fideo', cantidad: 35 },
            { nombre: 'Arroz', cantidad: 40 },
            { nombre: 'Azucar', cantidad: 25 }
        ],
        nombreProducto: '',
        total: 0,
    },
    // Adicionar un metodo para adicionar productos nuevos
    methods:{
        agregarAction () {
            // Adicionar nuevo objeto al array
            this.productos.push({
                nombre: this.nombreProducto,
                cantidad: 0
            });
            // Vaciar el campo de nombre
            this.nombreProducto = '';
        }
    },
    // Guarda funciones de retornar un valor procesado
    computed:{
        // Definir funcion que debe retornar una suma
        sumaCantidades () {
            // Implementar la logica
            this.total = 0;
            for(prod of this.productos){
                this.total = this.total + prod.cantidad;            }
            // Debe retornar un valor
            return this.total;
        }
    }
})