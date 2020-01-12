// boa pratica utilizar classes e ids nos selectores 
var titulo = (document.querySelector(".titulo"));

// console.log(titulo);
// console.log(titulo.textContent);

titulo.textContent = "Banana é muito bom";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 200){
    console.log("Peso é inválido");
    pesoValido = false;
    tdPeso.textContent = "Peso inválido";
}

if(altura <= 0 || altura >= 3){
    console.log("Altura é inválida");
    alturaValida = false;
    tdAltura.textContent = "Altura inválido";


}

if(alturaValida  && pesoValido ){

        var imcResultado = ( peso )/(Math.pow( altura ,2));

        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = imcResultado;

}
// console.log(paciente); // conter o tr 
// console.log(tdPeso); // devolver td
// console.log("O peso é : " + peso); // devolver somente o peso
// console.log("A altura é : " + altura);// devolver somente o altura
// console.log("O IMC é : " + imcResultado);// devolver somente o imc


