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
Vue.component('hijo', {
    template: 
    `<div>
        <h2>numero {{ $store.state.numero }}</h2>
    </div>`
})