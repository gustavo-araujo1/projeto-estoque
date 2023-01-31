class Movimentacao {
    
    constructor(quantidade, produto, observacao, cliente, requisitante) {

        this._quantidade = quantidade;
        this._produto = produto;
        this._observacao = observacao;
        this._cliente = cliente;
        this._requisitante = requisitante;
        Object.freeze(this)
    };


    // propriedades getter, não aceita receber valores.

    get quantidade() {
        return this._quantidade;
    };

    get produto() {
        return this._produto;
    };

    get observacao() {
        return this._observacao
    };

    get cliente() {
        return this._cliente;
    };

    get requisitante() {
        return this._requisitante
    }
}