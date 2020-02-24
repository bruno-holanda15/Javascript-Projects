class ListaNegociacoes{

    constructor() {
        
        this._negociacoes = [];

    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);

    }

    get negociacoes() {

        //programação defensiva, para impedir de outros controllers inserirem dados na nossa lista pelo get negociações 
        // ele devolve uma nova lista igual a nossa guardada
        return [].concat(this._negociacoes);

    }


}