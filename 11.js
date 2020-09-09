// A continuacion se enumerar las etapas del
// ciclo de vida de Vue

// 1) Definir una instancia de vue (beforeCreate)
const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola Ciclo de Vida de Vue'
    },

    // 1) Se ejecuta cuando se instancia un objeto de vue
    beforeCreate(){
        console.log('beforeCreate...');
    },

    // 2) Al crear los metodos, observadores y eventos
    // Pero aun no accede al DOM = 'el'
    created(){
        console.log('created...');
    },

    // 3) Se ejecuta antes de insertar informacion en el DOM
    // Ej. Antes de mostrar el 'mensaje' en el documento HTML 
    beforeMount(){
        console.log('beforeMount...');
    },

    // 4) Se ejecuta al insertar el DOM
    // Ej. Cuando se muestra el 'mensaje' 'Hola Ciclo de Vida Vue'
    mounted(){
        console.log('mounted...');
    },

    // 5) Se ejecuta al detectar algun cambio
    // Ej. Al presionar el boton CAMBIAR
    beforeUpdate(){
        console.log('beforeUpdate...');
    },

    // 6) Se ejecuta al realizar algun cambio
    // Ej. Al presionar el boton CAMBIAR
    updated(){
        console.log('updated...');
    },

    // 7) Se ejecuta antes de destruir la instancia
    // Ej. Al presionar el boton DESTRUIR
    beforeDestroy(){
        console.log('beforeDestroy...');
    },

    // 7) Se ejecuta al destruir la instancia
    // Ej. Al presionar el boton DESTRUIR 
    destroyed(){
        console.log('destroyed...');
    },
    // Todas las funciones anteriores se ejecutan automaticamente

    // Agregar un metodo para destruir la instancia
    methods:{
        destruir(){
            // Destruir la instancia
            this.$destroy();
        }
    }
})

