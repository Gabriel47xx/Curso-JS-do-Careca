function carregou(){
    console.log('Pagina Carregada com sucesso !!!')
}
let tit01 = document.querySelector('#test')

tit01.addEventListener('click', function(){
    window.alert('Clicou')
})

let frutas = ['Pera', 'Uva', 'Abacaxi', 'Cagaita']
let carros = ['Gol', 'Fusca', 'Polo', 'Hilux']

let lista = document.querySelector('#frutas')
let listCarros = document.querySelector('#carros')

frutas.forEach(function(fruta, i){
    lista.innerHTML += `${i} -  ${fruta} <br>`
})

carros.forEach(function(){
    listCarros.innerHTML = `${carros } <br>`
})