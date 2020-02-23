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
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map( (item , indice) => {
                return item - indice % 2;
            })
        );
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )

        console.log(negociacao);

        let exibeData = negociacao.data.getDate() + '/' + (negociacao.data.getMonth() + 1) + '/' + negociacao.data.getFullYear() ;
        console.log(exibeData);

    }

}