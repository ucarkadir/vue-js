new Vue({
  el: "#app",
  data: {
    sayac: 0
  },
  methods: {
    onClick (event){
    
      this.sayac += 1
    } 
  }
})
/** 
 * event.stopPropagation()
 * event.preventDefault()
 * event.once : sadece bir kez çalışır.
 * event.self : atanan elemanda method çalışır 
 *              içindeki elemanlarda çalışmaz.
 * 
 */