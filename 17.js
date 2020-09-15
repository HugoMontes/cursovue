// Adicionar sobre la instacia de Vue
// una constante para la instancia de vuex
const store = new Vuex.Store({
    // Crear un estado el cual va contener 
    // datos como variables globales
    // de tal manera que este disponible para cualquier
    // componente dentro de la aplicacion.
    state: {
        numero: 10
    },
    // Creamos metodos para modificar las variables
    mutations: {
        // Una opcion es llamar a state usando this
        subir: function(){
            this.state.numero++;
        },
        // Una segunda opcion es llamar a state pasando como argumento
        bajar: function(state){
            state.numero--;
        },
    }
});

// Instanciar un objeto de Vue
const app = new Vue({
    el: '#app',
    // Invocar a store dentro de vue
    store: store
})