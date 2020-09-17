// Crear un componente padre
Vue.component('padre', {
    // Mostrar el listado de usuarios siempre que el array tenga datos
    // Invocar a la mutacion obtenerUsuarios
    template: 
    `<div>
        <button @click="obtenerUsuarios">Obtener Usuarios</button>
        <ul v-if="usuarios != []"">
            <li v-for="usr of usuarios">{{ usr.name }}</li>
        </ul>
    </div>`,
    // Mapear el estado con mapState
    computed: {
        ...Vuex.mapState(['usuarios'])
    },
    // Mapear las acciones con mapActions para obtener los usuarios
    methods: {
        ...Vuex.mapActions(['obtenerUsuarios'])
    }
})
