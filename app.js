//let titulo = document.querySelector('h1'); 
// para puxar H1 q no caso é o tutulo, la do arquivo index.html

//titulo.innerHTML = 'Jogo do número secreto'; //atribuindo titulo 

//let paragrafo = document.querySelector('p'); //"segundo titulo"
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

mensagemInicial();
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag, texto) {      //função que atribui titulo as tags
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate:1.2});
}

function mensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', "Escolha um número entre 1 e 10");
}

function botaoChutar() {    //funciona como um if, ao clicar o botao fazer algo entre as chaves
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', 'você descobriu o número com ' + tentativas + ' ' + palavraTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
        
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor');
            
        }else {
            exibirTextoNaTela('p', 'O número é maior');
        }
        tentativas = tentativas + 1
            limparCampo();
    }

}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   } 

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
}