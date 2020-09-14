// Crear un componente hijo
Vue.component('hijo', {
    // Recuperar el dato mediante props
    props: ['numero'],
    // Mostrar el valor de numero
    template:
    `<div style="padding:5px; background: yellow;">
        <h4>Componente Hijo: {{ numero }}</h4>
    </div>`
})