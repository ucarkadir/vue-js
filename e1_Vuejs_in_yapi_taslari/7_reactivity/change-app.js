new Vue({
    el:"#app",
    data: {
        text: 'burada bir yazı var uzakta.'
    },
    methods: {
        onClick (event) {
            this.text = "başka bir değer"
            console.log(this.$el.textContent)
            this.$nextTick (() => {
            console.log(this.$el.textContent)
            } )
        }
    }
})