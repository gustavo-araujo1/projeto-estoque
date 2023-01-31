class MovimentacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputProduto = $('#produto');
        this._inputObservacao = $('#observacao');
        this._inputCliente = $('#cliente');
        this._inputRequisitante = $('#requisitante');


        this._listaMovimentacoes = new Bind(
            new ListaMovimentacoes(),
            new MovimentacoesView($('#movimentacoesView')),
            'adiciona', 'esvazia'
        )

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto');

        

            this._armazenaDados = new ArmazenaDados()

    }

    importa() {

        this._movimentacoesView = new MovimentacoesView($('#movimentacoesView'))
        this._movimentacoesView.update(this._armazenaDados)
    }

    adiciona(event) {

        event.preventDefault();
        this._listaMovimentacoes.adiciona(this._criaMovimentacao());
        this._armazenaDados.adiciona(this._criaMovimentacao())
        this._mensagem.texto = 'Movimentação adicionada a lista com sucesso!'
        this._limpaFormulario();
    }

    apaga() {

        this._listaMovimentacoes.esvazia();
        this._mensagem.texto = 'Movimentações apagadas com sucesso';
    }

    _criaMovimentacao() {

        return new Movimentacao(

            this._inputQuantidade.value.toUpperCase(),
            this._inputProduto.value.toUpperCase(),
            this._inputObservacao.value.toUpperCase(),
            this._inputCliente.value.toUpperCase(),
            this._inputRequisitante.value.toUpperCase(),
        )
    }

    _limpaFormulario() {

        this._inputQuantidade.value = 1,
            this._inputProduto.value = '',
            this._inputObservacao.value = '',
            this._inputCliente.value = '',
            this._inputRequisitante.value = ''

        this._inputQuantidade.focus()
    };
}

