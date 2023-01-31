class ListaMovimentacoes {

    constructor() {

        this._movimentacoes = []   
    }

    adiciona(movimentacao) {
        //console.log(movimentacao)
        this._movimentacoes.push(movimentacao);
    }

    get movimentacoes() {
        
        console.log(this._movimentacoes)
        return [].concat(this._movimentacoes);
    }

    esvazia() {
        
        return this._movimentacoes = [];
    }

}