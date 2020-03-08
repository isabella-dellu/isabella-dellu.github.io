var certificados = new Vue({
  el: "#certificados",
  data: {
    certificados: [],
    anos: [""],
    instituicoes: [""],
    instituicoes_cod: [""],
    busca_ano: "",
  },

  methods: {
    fetchCertificados() {
      fetch("../../api/certificados.json")
        .then(r => r.json())
        .then(certificado => {
          this.certificados = certificado.certificados
        })
    },
  },

  watch: {
    certificados: function () {
      this.certificados.forEach(item => {
        if (!this.instituicoes.includes(item.instituicao)) {
          this.instituicoes_cod.push(item.instituicao_cod)
        }
      })
    },
  },

  // computed: {
  //   certificadosFiltrados: function(){
  //     return this.certificados.filter(item => {
  //       return item.ano.match(this.busca_ano)
  //     })
  //   }
  // }, 

  created() {
    this.fetchCertificados()
  },
})