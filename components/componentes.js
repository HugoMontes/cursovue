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

    // Gracias a mapMutations podemos invocar directamente
    // las mutaciones de forma mucho mas simplificada
    template: 
    `<div>
        <button @click="bajar">-</button>
        <button @click="subir">+</button>
        <h2>numero {{ numero }}</h2>
    </div>`,
    // Obtener el valor de state mediante mapState
    computed: {
        ...Vuex.mapState(['numero'])
    },
    // Mapear la mutacion subir y bajar en methods
    methods: {
        ...Vuex.mapMutations(['subir', 'bajar'])
    }

})