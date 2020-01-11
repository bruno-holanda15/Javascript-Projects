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

var imcResultado = ( peso )/(Math.pow( altura ,2));

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imcResultado;



console.log(paciente); // conter o tr 
console.log(tdPeso); // devolver td
console.log("O peso é : " + peso); // devolver somente o peso
console.log("A altura é : " + altura);// devolver somente o altura
console.log("O IMC é : " + imcResultado);// devolver somente o imc


