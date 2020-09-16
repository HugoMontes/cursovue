// Crear un componente titulo
// Visualizar valor de numero usando vuex 
Vue.component('padre', {
    // Invocar a una propiedad calculada
    template: 
    `<div>
        <h1>numero {{ numero }}</h1>
        <hijo></hijo>
    </div>`,
    // Crear una propiedad calculada para retornar
    // unicamente el valor de numero
    computed: {
        numero: function() {
            // Retorna unicamente el valor requerido
            return store.state.numero;
        }
    }
})

// Crear un componente hijo
// Visualizar valor de numero usando vuex
// Adicionar botones para invocar a las mutaciones
// Invocamos a store y este a su ves llama a commit el 
// cual ejecuta una mutacion
Vue.component('hijo', {
    template: 
    `<div>
        <button @click="$store.commit('bajar')">-</button>
        <button @click="$store.commit('subir')">+</button>
        <h2>numero {{ $store.state.numero }}</h2>
    </div>`
})