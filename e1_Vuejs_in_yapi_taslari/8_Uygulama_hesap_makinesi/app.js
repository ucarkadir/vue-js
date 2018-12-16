new Vue({
    el: '#hesap-makinesi',
    data: {
        sayi1: 3,
        sayi2: 7,
        islemler: ['+','-','*','/'], 
        secilen_islem : '+',
        sonuc = null
    }, 
    methods: {
        onChange(event) {
            switch(secilen_islem) {
                case "+":
                    this.sonuc = this.sayi1 + this.sayi2
                    break
                case "-":
                    this.sonuc = this.sayi1 - this.sayi2
                    break
                case "/":
                    this.sonuc = (this.sayi1 / this.sayi2).toFixed(2)
                    break
                case "*":
                    this.sonuc = this.sayi1 * this.sayi2
                    break
                default:
                    console.log('beyle bir işlem yok.')
            }
        }
    }
})