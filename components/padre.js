// Crear un componente padre
Vue.component('padre', {
    // Usar los template literales para poder presionar enter
    // hacer uso de los backtils ALTR + 96
    // cuando se usa template literales es obligatoria usar
    // un contendor como por ejemplo un div

    // :numero hace uso del view binding para enviar data al hijo
    template:
    `<div style="padding:5px; background: red;">
        <h2>Componente Padre: {{ numeroPadre }}</h2>
        <hijo :numero="numeroPadre"></hijo>
    </div>`,
    // Indicar la data en contenedor padre
    data: function() {
        return {
            numeroPadre: 7
        }
    }
})
