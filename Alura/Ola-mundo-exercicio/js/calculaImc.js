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

        var imc = calculaImc(peso,altura);            
        tdImc.textContent = imc;

    }
}
    // console.log(paciente); // conter o tr 
    // console.log(tdPeso); // devolver td
    // console.log("O peso é : " + peso); // devolver somente o peso
    // console.log("A altura é : " + altura);// devolver somente o altura
    // console.log("O IMC é : " + imcResultado);// devolver somente o imc


function calculaImc(peso,altura){
  
    var imc = 0;
    imc = peso / ( Math.pow(altura,2));
    return imc.toFixed(2);

}