new Vue({
    el: "#app",
    data: {
        textContainer: {
            text: 'burada bir text var uzakta.'
        }
    },
    methods:{
        onClick (event) {
            // this.textContainer.text2 = 'yeni özellik'
            Vue.set(this.textContainer, 'text2', '<b> yeni özellik</b>')
        }
    }
    
})