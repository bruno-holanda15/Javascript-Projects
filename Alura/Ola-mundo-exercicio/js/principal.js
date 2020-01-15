// boa pratica utilizar classes e ids nos selectores 
var titulo = (document.querySelector(".titulo"));

// console.log(titulo);
// console.log(titulo.textContent);

titulo.textContent = "Banana é muito bom";


var pacientes = document.querySelectorAll(".paciente");// querySelectorAll seleciona todas as tags com classe paciente e joga em um array
console.log(pacientes);

for (let i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];    

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");  
    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 200){
        console.log("Peso é inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
        
    }

    if(altura <= 0 || altura >= 3){
        console.log("Altura é inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválido";
        paciente.classList.add("paciente-invalido");


    }

    if(alturaValida  && pesoValido ){

            var imcResultado = ( peso )/(Math.pow( altura ,2));

            
            tdImc.textContent = imcResultado.toFixed(2);

    }
}
    // console.log(paciente); // conter o tr 
    // console.log(tdPeso); // devolver td
    // console.log("O peso é : " + peso); // devolver somente o peso
    // console.log("A altura é : " + altura);// devolver somente o altura
    // console.log("O IMC é : " + imcResultado);// devolver somente o imc


var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){

   event.preventDefault();
   var form = document.querySelector("#form-adiciona");
   var nome = form.nome.value;
   var peso = form.peso.value;
   var altura = form.altura.value;
   var gordura = form.gordura.value;

   var pacienteTr = document.createElement("tr");
   var nomeTd = document.createElement("td");
   var pesoTd = document.createElement("td");
   var alturaTd = document.createElement("td");
   var gorduraTd = document.createElement("td");

   nomeTd.textContent = nome;
   pesoTd.textContent = peso;
   alturaTd.textContent = altura;
   gorduraTd.textContent = gordura;
   
   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);

   var tabela = document.querySelector("#tabela-pacientes");
   tabela.appendChild(pacienteTr);


});
