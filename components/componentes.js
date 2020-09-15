// Crear un componente titulo
// Visualizar valor de numero usando vuex 
Vue.component('padre', {
    template: 
    `<div>
        <h1>numero {{ $store.state.numero }}</h1>
        <hijo></hijo>
    </div>`
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