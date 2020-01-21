var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){

   var alvoEvento = event.target;
   var paiEvento = alvoEvento.parentNode;
    // TR = paciente que queremos remover
    
   paiEvento.classList.add("fadeOut");
   
   
   setTimeout(function(){

    paiEvento.remove();

   },1100);
   

});










// uma má pratica, pois ele só escuta o evento para os elementos q ja estão no html , para os q foram criados depois não funcionaria 

// pacientes.forEach(function(paciente){
   
//     paciente.addEventListener("dblclick",function(){
//         console.log("Fui clicado duas vezes");
//         this.remove();
//         // this é quem foi clicado, quem chamou o evento 
//     })

// });
