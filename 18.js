// Instanciar store de vuex
const store = new Vuex.Store({
    state: {
        // Agregar un array vacio
        usuarios: []
    },
    // Creamos metodos para modificar los states
    mutations: {
        // Crear una mutacion para llenar el array
        llenarUsuarios(state, usuariosAction){
            // Llenar el estado personas con el array de personasAccion
            state.usuarios = usuariosAction;
        }
    },
    // Crear acciones que llamen a un API
    actions: {
        // Agregar una accion que obtenga datos del API
        obtenerUsuarios: async function({ commit }){
            // Mediante una promesa invocar a la uri
            const data = await fetch('http://jsonplaceholder.typicode.com/users');
            // Obtener los datos en formato json
            const usuarios = await data.json();
            // Invocar a commit para llamar a la mutacion el cual llena
            // el state con los datos obtenidos
            commit('llenarUsuarios', usuarios);
        }
    }
});

// Instanciar un objeto de Vue
const app = new Vue({
    el: '#app',
    // Invocar a store dentro de vue
    store: store
})