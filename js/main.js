// declara as variaveis dos elementos que queremos manipular

let formulario = document.querySelector("#formulario")
let nome = document.querySelector("#nome")
let idade = document.querySelector("#idade")
let peso = document.querySelector("#peso")
let altura =  document.querySelector("#altura")
let cxresultado = document.querySelector("#resultadoImc")
let btnEnviar = document.querySelector("#btnEnviar")
let btnLimpar = document.querySelector("#btnLimpar")
btnEnviar.addEventListener("click", ativar)
function ativar (evt){
// para pegar os dados que foram escrito 
// temos que escrever .value no final
// so dados que foram escritos
    let dnome = nome.value
    let didade = idade.value
    let dpeso = peso.value
    let daltura = altura.value
    let  imc = (dpeso/ (daltura * daltura)).toFixed(1)
 
   alert( 
     'Nome: ' + dnome  +'\n' + 
     "Idade: " + didade + " anos\n" +
    "Peso: " + dpeso + " kgs\n" +
    "Altura: " + daltura + "\n" +
    "IMC: " + imc  
      )

// pelo que entendi é usado para a pagina não ser reedirecionada
 evt.preventDefault()
 

}

     
