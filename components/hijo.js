// Crear un componente hijo
Vue.component('hijo', {
    // Recuperar el dato mediante props
    props: ['numero'],
    // Mostrar el valor de numero
    // Mostrar el valor de la propiedad nombre
    template:
    `<div style="padding:5px; background: yellow;">
        <h4>Componente Hijo: {{ numero }}</h4>
        <h4>Nombre: {{ nombre }}</h4>
    </div>`,
    // Agregar la propiedad nombre
    data: function(){
        return {
            nombre: 'Juan'
        };
    },
    // Al cargar la instancia mandar el dato
    // al contendor padre.
    mounted(){
        // Al emitir un evento pasar un dato
        this.$emit('nombreHijo', this.nombre);
    }
})