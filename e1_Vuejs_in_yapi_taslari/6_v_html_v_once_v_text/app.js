new Vue({
  el: '#app',
  data: {
    liste: ['ali', 'veli', 'kemal'],
    arkadasim: {
      isim: 'gizem',
      yas: 25,
      meslek: 'programci'
    }
  },
  methods: {
    rasgeleliste() {
      this.liste = this.liste.sort(() => Math.random() - 0.5)
    }
  }
})