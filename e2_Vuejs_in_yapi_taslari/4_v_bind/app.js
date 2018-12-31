new Vue({
  el: "#app",
  data: {
    isActive: true,
    activeClass:"is-active"
  },
  computed:{
    classDecider: () => {
        return 'lorem-text'
    }
  }
});