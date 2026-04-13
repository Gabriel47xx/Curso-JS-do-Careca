let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let msg = document.querySelector('#mensagem')

let pontos = 0
let placar = 0

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

// ALTERNATIVAS

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// ARTICLE COM AS QUESTOES 
let articleQuestoes = document.querySelector('.questoes')
// OL LI com alternativas 
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao : 0,
    pergunta     :"Pergunta",
    alternativaA : "AlternativaA",
    alternativaB : "AlternativaB",
    alternativaC : "AlternativaC",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Boreal e o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Norte",
    correta      : "Norte",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Austral e o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Norte",
    correta      : "Sul",
}

//Constante com um array de objetos com todas as questoes 
const questoes = [q0, q1, q2]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log('Total de questoes' + totalDeQuestoes)
total.textContent = totalDeQuestoes

//Montar a 1A questao para iniciar o Quiz 
numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

//Configurar o value inicial 1a
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

//Montar as proximas questões 
function proximaQuestao(nQuestao){
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}
let indiceAtual = 1
function verificarSeAcertou(elemento){
    

    let respostaEscolhida = elemento.textContent
    questoes[indiceAtual].correta
    
    console.log('RespU' + respostaEscolhida)

    let certa = questoes[numDaQuestao].correta
    console.log("RespC" +certa)

    if(respostaEscolhida == certa){
        pontos += 10
        msg.innerHTML = 'Acertouu'
    }else {
        msg.textContent = 'Errou'
    }
    //atualizar placar 
    placar = pontos 
    instrucoes.textContent = "Pontos" + placar

    setTimeout(function(){
        proxima = numDaQuestao + 1

        if(proxima > totalDeQuestoes){
            console.log('Fim do jogo')
            fimDoJogo()
        }else{
            proximaQuestao(proxima)
        }

    }, 250)

}


