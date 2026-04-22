//Carrossel
let ulsElis = document.querySelectorAll('ul li')

let qtdItens = ulsElis.length

let numItens = 6

let lista1 = document.querySelectorAll('#lista1 li')

function show(indice, indiceLista) {
    let n = indice
    numDeItens =  numDeItens + indice
    console.log(n + " " + numDeItens)

    let listaUl = document.querySelector('#lista'+indiceLista)
    //console.log(listaUl)

    let mover  = 100
    let posicaoXDireita = mover
    let posicaoXEsquerda = -mover

    if(indice == +1) {
        //console.log('Mover para direita')
        listaUl.scrollBy(posicaoXDireita, 0)
    }
    if(indice == -1) {
        //console.log('Mover para esquerda')
        listaUl.scrollBy(posicaoXEsquerda, 0)
    }

}