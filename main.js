let app = new Vue({
  el: "#app",
  data: {
    nodeList: [3000, 3001, 3002, 3003, 3004],
    test: "Bonjour",
    texte: null
  },
  created: function() {
    this.nodeList.forEach(element => {
      fetch("http://localhost:" + element + "/actualchain")
        .then(res => res.json())
        .then(data => {
          if (this.texte == null && data != undefined) {
            this.texte = data;
          }
        });
    });
  }
});
