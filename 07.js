const app = new Vue({
    el: '#app',
    data: {
        titulo: 'CALCULADORA',
        valora: '',
        valorb: '',
        resultadoSuma: '',
        resultadoResta: '',
        resultadoProducto: '',
        resultadoDivision: ''
    },
    // Adicionar un metodo
    methods:{
        calcularAction () {
            let a = Number(this.valora);
            let b = Number(this.valorb);
            this.resultadoSuma = `${a} + ${b} = ${a + b}`;
            this.resultadoResta = `${a} - ${b} = ${a - b}`;
            this.resultadoProducto = `${a} * ${b} = ${a * b}`;
            this.resultadoDivision = `${a} / ${b} = ${a / b}`;
        }
    }
})