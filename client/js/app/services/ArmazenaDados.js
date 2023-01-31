class ArmazenaDados {

    constructor() {

        this._movimentacoes = []
        this._dados = JSON.parse(localStorage.getItem("itens"))

       /*  if (this._movimentacoes.length == 0) {
            this._movimentacoes.push(this._dados)
        } */
    }

    adiciona(movimentacao) {
        //console.log(movimentacao)
        this._movimentacoes.push(movimentacao);
        localStorage.setItem("itens", JSON.stringify(this._movimentacoes))
    }

    get movimentacoes() {
        
        console.log(this._movimentacoes)
        return [].concat(this._movimentacoes);
    }

    esvazia() {
        
        return this._movimentacoes = [];
    }

}

/* const array = [
    {a: 1, b: 2},
    {a: 3, b: 4},
    {a: 5, b: 6}
  ];
  
  const result = array.reduce((acc, curr) => {
    return {...acc, ...curr};
  }, {});
  
  console.log(result);
  // Output: {a: 5, b: 6} */