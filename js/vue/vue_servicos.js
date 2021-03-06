var servicos = new Vue({
  el: "#services",
  data: {
    servicos: [],
  },

  methods: {
    fetchServicos() {
      fetch("../../api/servicos.json")
        .then(r => r.json())
        .then(servico => {
          this.servicos = servico.servicos
          console.log(this.servicos)
        })
    },
  },

  created(){
    this.fetchServicos()
  }

})