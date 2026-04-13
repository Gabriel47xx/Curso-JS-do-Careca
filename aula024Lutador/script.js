let imgFoto = document.querySelector('#foto')
let nome = document.querySelector('#nome')
let nacionalidade = document.querySelector('#nacionalidade')
let idade = document.querySelector('#idade')
let peso = document.querySelector('#peso')
let altura = document.querySelector('#altura')

let conteudos = document.querySelector('.conteudos')

const url = 'cards.json'

function pegarDados(i){
    fetch(url)
    .then(response => response.json())
    .then(dados => {
        if(dados.erro){
            console.log('Erro ao acessar o JSON')
            return
        }
        let qtdLutadores = (dados.lutadores.length)
        console.log("Quantidade Lutadores "+ qtdLutadores)
        atribuirDados2(dados, i)
    })
}

//SELECIONAR TODOS OS CARDS POR CLASS
let imgsFoto = document.getElementsByClassName('foto')
let nomeLutadores = document.getElementsByClassName('nome')
let nacionalidadeLutadores = document.getElementsByClassName('nacionalidade')
let idadeLutadores = document.getElementsByClassName('idade')
let pesoLutadores = document.getElementsByClassName('peso')
let alturaLutadores = document.getElementsByClassName('altura')

function atribuirDados2(dados, i){
    imgsFoto[i].setAttribute('src', dados.lutadores[i].foto)
    nomeLutadores[i].textContent = dados.lutadores[i].nome
    nacionalidadeLutadores[i].textContent = dados.lutadores[i].nacionalidade
    idadeLutadores[i].textContent = dados.lutadores[i].idade + " anos"
    pesoLutadores[i].textContent = dados.lutadores[i].peso + " Kg"
    alturaLutadores[i].textContent = dados.lutadores[i].altura + " m"
}

function desenharCarta(id){
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    conteudos.appendChild(carta)

    let imagem = document.createElement("img")
    carta.appendChild(imagem)
    imagem.setAttribute('class', 'foto')
    imagem.setAttribute('src', 'aula024Lutador/fotos')

    // NOME DO LUTADOR
    let nomeLutador = document.createElement("h2")
    nomeLutador.setAttribute('class', 'nome')
    carta.appendChild(nomeLutador)
    nomeLutador.textContent = "Nome"

    // NACIONALIDADE DO LUTADOR
    let nacionalidadeLutador = document.createElement("h3")
    nacionalidadeLutador.setAttribute('class', 'nacionalidade')
    carta.appendChild(nacionalidadeLutador)
    nacionalidadeLutador.textContent = ""

    // IDADE DO LUTADOR
    let idadeLutador = document.createElement("h3")
    idadeLutador.setAttribute('class', 'idade')
    carta.appendChild(idadeLutador)
    idadeLutador.textContent = "idade anos" 

    // PESO DO LUTADOR
    let pesoLutador = document.createElement("h3")
    pesoLutador.setAttribute('class', 'peso')
    carta.appendChild(pesoLutador)
    pesoLutador.textContent = "peso Kg" 

    // ALTURA DO LUTADOR
    let alturaLutador = document.createElement("h3")
    alturaLutador.setAttribute('class', 'altura')
    carta.appendChild(alturaLutador)
    alturaLutador.textContent = "altura m" 

    pegarDados(id)
}

// 1a carta pegamos os dados. Ela ja esta desenhada na tela

pegarDados(0)
desenharCarta(1)





