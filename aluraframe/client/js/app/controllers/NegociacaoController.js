class NegociacaoController{

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade= $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);



    }

    adiciona(event) {
        
        event.preventDefault();

        // DESSE JEITO A DATA NÃO VEM NO FORMATO ADEQUADO PARA CRIAR UMA NOVA DATA
        // console.log(typeof(this._inputData.value));
        // console.log(this._inputData.value);

        // DESSA MANEIRA, ELE PEGA O TEXTO 2016-11-12 E TRANSFORMA EM UM ARRAY, O SLIPT PEGA O - E SEPARA CADA ELEMENTO DO ARRAY POR ELE,
        // let test = this._inputData.value.split('-');
        // console.log(test);
        
        // E A DATE ACEITA ESSE FORMATO PARA CRIAR UM NOVO OBJETO , utilizando o Map para criar um novo array, pois 
        // a data pega o elemento mes com um decrescimo , como int 11 sendo dec , int 10 nov, por isso no nosso indice 1 do array diminuimos um valor 

        // let data = new Date(...
        //     this._inputData.value
        //     .split('-')
        //     .map( function(item , indice) {
        //         if (indice == 1 ){
        //             return item - 1;
        //         }
        //         return item;
        //     })
            
        //     );
        
        //     console.log(data);

        // Forma resumida , arrow function

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )

        this._listaNegociacoes.adiciona(negociacao);
        this._mensagem.texto = "Negociação adicionada com sucesso";
        this._mensagemView.update(this._mensagem);
        this._negociacoesView.update(this._listaNegociacoes);

        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);

    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';

        this._inputData.focus();
    }

}