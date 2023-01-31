class MovimentacoesView {

    constructor(elemento) {

        this._elemento = elemento;
    }

    _template(model) {
        //console.log(model)
        return `
        <table class="table table-hover table-bordered">
            <thead class="table-striped">
                <tr>
                    <th>QUANTIDADE</th>
                    <th>PRODUTO</th>
                    <th>OBSERVAÇÃO</th>
                    <th>CLIENTE</th>
                    <th>REQUISITANTE</th>
                </tr>
            </thead>

            <tbody>
            ${model.movimentacoes.map(n => `
                <tr>
                    <td class="text-center"><button>-</button>${n.quantidade}<button>+</button></td>
                    <td>${n.produto}</td>
                    <td>${n.observacao}</td>
                    <td>${n.cliente}</td>
                    <td>${n.requisitante}</td>
                    <td><button>x</button></td>
                </tr>
                `).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>
    `}

    update(model) {
        console.log(model)
       
        this._elemento.innerHTML = this._template(model);
    }
}