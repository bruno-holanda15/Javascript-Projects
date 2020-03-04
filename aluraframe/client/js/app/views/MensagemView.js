class MensagemView extends View{
    
    //passa para a classe pai o elemento
    constructor(elemento){

        super(elemento);
    }

    template(model){

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }


}