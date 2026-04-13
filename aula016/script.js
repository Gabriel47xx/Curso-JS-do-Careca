let numSorteado = document.querySelector('#numSorteado')
let btnSortear = document.querySelector('#btnSortear')
let imgDado = document.querySelector('#imgDado')
let audioDado = document.querySelector('#audio') 

btnSortear.addEventListener('click', sortear)

function sortear(){
    audioDado.play()  
    
    let animacao = setInterval(function(){
        let n = Math.floor(Math.random() * 6) + 1
        imgDado.src = `dado/${n}.png`
    }, 100)


setTimeout(function(){
    clearInterval(animacao)

    let num = Math.floor(Math.random() * 6) + 1
    numSorteado.innerHTML = num
    imgDado.src = `dado/${num}.png` 
}, 1500)

}

