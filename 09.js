const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola Mundo',
    },
    // Indicar las propiedades computadas
    computed: {
        // Agregar la propiedad computada para invertir
        // Es practicamente una funcion que retorna un valor
        invertido(){
            // Obtener la cadena a invertir en un array
            let mensajeArray = this.mensaje.split('');
            // Invertir el array
            let arrayInvertido = mensajeArray.reverse();
            // Convertir el array en una cadena
            let mensajeInvertido = arrayInvertido.join('');
            // Retornar la cadena invertida
            return mensajeInvertido;
        }
    }
})