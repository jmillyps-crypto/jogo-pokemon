var velocidade = 1
var pontos = 0
var vida = 3
var valorCenario = 0
var posVilao = -153
var posPersonagem = 70
var pulando = false
var numPulo = 0
var recorde = localStorage.getItem("record")

var cenario = document.querySelector('.cenario')
var jogadr = document.querySelector('#jogador')
var vilao = document.querySelector('#vilao')

var img1 = document.querySelector('#img1')
var img2 = document.querySelector('#img2')
var img3 = document.querySelector('#img3')

function moverCenario(){
    valorCenario = valorCenario - velocidade
    console.log(valorCenario)
    cenario.style.backgroundPositionX = valorCenario + 'px'
}
 
function mudarcenario() {
    var cenario = document.querySelector('.cenario')
 
    if (pontos === 10) {
        cenario.style.backgroundImage = "url(./assets/img/cenario.1.png)"
    }
 
    else if (pontos === 20) {
        cenario.style.backgroundImage = "url(./assets/img/cenario.2.png)"
    }
 
    else if (pontos === 30) {
        cenario.style.backgroundImage = "url(./assets/img/cenario.3.png)"
    }
}


function moverVilao(){
    posVilao = posVilao + velocidade * 4
    vilao.style.right = posVilao + 'px'

    var larguraJogo = cenario.offsetWidth
    

    if(posVilao > larguraJogo){
        posVilao = -153
        pontos += 10

        document.querySelector('#valor_pontos').innerHTML = pontos

        if(pontos % 10 === 0 && velocidade <= 4){
            velocidade += 1

        } 
    }
}
function trocarVilao(){

    if(pontos == 20){
        vilao.style.backgroundImage = "url(./assets/img/vilao1.png)"
    }

    if(pontos == 30){
        vilao.style.backgroundImage = "url(./assets/img/vilao2.png)"
    }

    if(pontos == 40){
        vilao.style.backgroundImage = "url(./assets/img/vilao3.png)"
    }
}
function trocarJogador(){

    if(pontos == 20){
        jogador.style.backgroundImage = "url(./assets/img/jogador2.png)"
    }

    if(pontos == 30){
        jogador.style.backgroundImage = "url(./assets/img/jogador3.png)"
    }

}

var contador = 0

function pular(){
    var velocidadePulo = 6
    if(pulando === true){

        if(posPersonagem < 300){
            posPersonagem += velocidadePulo + 2
        }
        else{
            if(contador >= 12){
                pulando = false
                contador = 0
            }
            else{
                contador += 1
            }
        }
    }
    else{
        if(posPersonagem > 70){
            posPersonagem -= velocidadePulo + 2
        }
           
        else{
            posPersonagem = 70
            numPulo = 0
        }
        
    }
     jogador.style.bottom = posPersonagem + 'px'
}
    

         

function colisao(){
    var posJ = jogador.getBoundingClientRect()
    var posV = vilao.getBoundingClientRect()
    
    if(posV.left < posJ.right && 
        posV.left > posJ.left && 
        posV.top <= posJ.bottom){
        
            perderVidas()
            document.querySelector("#somDano").play()

            posVilao = -153
            pulando = false
            posPersonagem= 70  
 
    }
 
    
}
function perderVidas(){
        vida -= 1

        if(vida == 2){
            img3.style.display = 'none';
        }
        if(vida == 1){
            img2.style.display = 'none';
        }
        if(vida == 0){
            img1.style.display = 'none';

            if(pontos > Number(recorde)){
                localStorage.setItem('record', pontos)
            }
            
            window.location.href = "gameover.html"
        }

}

setInterval (function(){
    moverCenario()
    moverVilao()
    pular()
    colisao()
    mudarcenario()
    trocarVilao()
    trocarJogador()
}, 20)

document.addEventListener('keypress', function(event){

        if(event.code === 'Space'){
            if (posPersonagem <= 70) {
                numPulo = numPulo + 1
                pulando = true
            } else if (pontos >= 0 && numPulo <= 2) {
                numPulo = numPulo + 1
                pulando = true
            }
        }

        document.querySelector("#meuSom").play()
   
})




