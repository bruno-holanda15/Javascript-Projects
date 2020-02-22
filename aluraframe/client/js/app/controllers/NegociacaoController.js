class NegociacaoController{

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade= $("#quantidade");
        this._inputValor = $("#valor");

    }

    adiciona(event) {
        
        event.preventDefault();

        // DESSE JEITO A DATA NÃO VEM NO FORMATO ADEQUADO PARA CRIAR UMA NOVA DATA
        // console.log(typeof(this._inputData.value));
        // console.log(this._inputData.value);

        let test = this._inputData.value.split('-');
        console.log(test);

        // DESSA MANEIRA, ELE PEGA O TEXTO 2016-11-12 E TRANSFORMA EM UM ARRAY, O SLIPT PEGA O - E SEPARA CADA ELEMENTO DO ARRAY POR ELE,
        // E A DATE ACEITA ESSE FORMATO PARA CRIAR UM NOVO OBJETO 
        let data = new Date(this._inputData.value.split('-'));
        console.log(data);

        

    }



}