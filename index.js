
   
//Chamar a seta para estabelecer as funções dela, lembrando que a seta esquerda está como none do CSS por isso não aparece no site.
//Vamos determinar quando a seta deve aparecer.    
   var SetaDireita = window.document.getElementById ("seta_direita")
   var SetaEsquerda = window.document.getElementById ("seta_esquerda")

   //Aqui eu criei uma variavel e identifiquei ela com o nome de cada elemento dentro do Carrossel
// //Depois eu pedi para o js ir na janela e no documento e selecionar o id "Samantha".
    var Samantha = window.document.getElementById("Samantha")
    var Leonardo = window.document.getElementById("Leonardo")
    var Bruna = window.document.getElementById ("Bruna")

        function RolarParaDireita() {

//Nessa etapa eu criei a função/function "RolarParaDireita", onde com comando display:none o JS entende que é para o Leonardop sumir da tela. 
//Em contra partida eu pedi para que a Bruno sumisse da página lá no meu arquivo Style e agora vou pedir para o CS mostrar ela na página.
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
}