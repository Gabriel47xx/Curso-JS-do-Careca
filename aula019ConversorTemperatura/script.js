let numC = document.querySelector('#numC')
let numF = document.querySelector('#numF')

let fahrenheit = document.querySelector('#fahrenheit')
let celsius = document.querySelector('#celsius') 



function atualizarC(){
    numC.value = celsius.value
}

function atualizarF(){
    let c = Number(celsius.value)
    numF.value = (c * 9/5 + 32).toFixed(1)
    fahrenheit.value = numF.value

}

function zerar(){
    celsius.value = 0
    numC.value = celsius.value
    fahrenheit.value = 0
    numF.value = fahrenheit.value

}