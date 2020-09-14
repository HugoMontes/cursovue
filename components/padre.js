// Crear un componente padre
Vue.component('padre', {
    // Usar los template literales para poder presionar enter
    // hacer uso de los backtils ALTR + 96
    // cuando se usa template literales es obligatoria usar
    // un contendor como por ejemplo un div
    template:
    `<div style="padding:5px; background: red;">
        <h2>Componente Padre</h2>
        <hijo></hijo>
    </div>`
})
