var velocidade = 1
var pontos = 0
var vida = 3
var valorCenario = 0
var posVilao = -153
var posPersonagem = 70
var pulando = false

var cenario = document.querySelector('.cenario')
var jogadr = document.querySelector('#jogador')
var vilao = document.querySelector('#vilao')

function moverCenario(){
    valorCenario = valorCenario - velocidade
    console.log(valorCenario)
    cenario.style.backgroundPositionX = valorCenario + 'px'
}

function moverVilao(){
    posVilao = posVilao + velocidade * 2
    vilao.style.right = posVilao + 'px'

    var larguraJogo = cenario.offsetWidth

    if(posVilao > larguraJogo){
        posVilao = -153
        pontos += 10

        document.querySelector('#valor_pontos').innerHTML = pontos

        if(pontos % 50 === 0){
            velocidade += 1

        }
    }
}

var contador = 0

function pular(){
    if(pulando === true){

        if(posPersonagem < 250){
            posPersonagem += 5
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
            posPersonagem -= velocidade + 2
        }
        else{
            posPersonagem = 70
        }

    }
    jogador.style.bottom = posPersonagem + 'px' 
}
         



setInterval (function(){
    moverCenario()
    moverVilao()
    pular()
}, 20)

document.addEventListener('keypress', function(event){

        if(event.code === 'Space' && posPersonagem === 70){
            pulando = true
        }

   
})
        




