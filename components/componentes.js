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

    // Obtener el valor de state mediante mapState
    computed: {
        ...Vuex.mapState(['numero'])
    }
})

// Crear un componente hijo
// Visualizar valor de numero usando vuex
// Adicionar botones para invocar a las mutaciones
// Invocamos a store y este a su ves llama a commit el 
// cual ejecuta una mutacion
Vue.component('hijo', {
    // Invocar directamente numero
    template: 
    `<div>
        <button @click="$store.commit('bajar')">-</button>
        <button @click="$store.commit('subir')">+</button>
        <h2>numero {{ numero }}</h2>
    </div>`,
    // Obtener el valor de state mediante mapState
    computed: {
        ...Vuex.mapState(['numero'])
    }
})