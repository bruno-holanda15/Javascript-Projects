class NegociacaoController{

    constructor() {

        let $ = document.querySelector.bind(document);
        this.inputData = $("#data");
        this.inputQuantidade= $("#quantidade");
        this.inputValor = $("#valor");

    }

    adiciona(event) {
        
        event.preventDefault();

        alert(this.inputQuantidade.value);
        alert(this.inputValor.value);
        
    }



}