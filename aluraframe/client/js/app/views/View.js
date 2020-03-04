class View{
    
    constructor(elemento){
        
        this._elemento = elemento;
    }

    //caso as classes filhas esqueçam de criar um método template
    template() {
        
        throw new Error("O método template deve ser implementado");

    }

    update(model) {
        
        this._elemento.innerHTML = this.template(model);
    }
}