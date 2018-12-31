new Vue({
    el: "#bahsisci",
    data: {
        hesap: '200',
        bahsis_yuzdesi: [0,5,10,15,20],
        secilen_bahsis_yuzdesi: 0,
        bahsis: null
    },
    methods: {
        onChange (event) {
            if(this.secilen_bahsis_yuzdesi === 0 || this.hesap === 0) {
                this.bahsis = null
                return
            }
            this.bahsis = this.hesap * this.secilen_bahsis_yuzdesi / 100
        }
    }
})