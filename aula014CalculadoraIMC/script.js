let formulario = document.querySelector('#formulario')
let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoImc')
let aviso = document.querySelector('#aviso')
let resultadoFinal = document.querySelector('#resultado')
let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')


btnEnviar.addEventListener('click', function(e){
    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let situacao = ''
    let img = document.querySelector('#imgSituacao')

    let imc = (peso / (altura * altura)).toFixed(1)
    cxImc.value = imc
    if(imc < 18.5){
        situacao = 'Peso Baixo'
        img.src = 'pesoBaixo.png'        
    }else if(imc >= 18.5 && imc <= 24.9){
        situacao = 'Peso Normal'
        img.src = 'pesoNormal.png'        
    }else if(imc >= 25 && imc <= 29.9){
        situacao = 'Sobrepeso'
        img.src = 'sobrePeso.png'   
    }else if(imc >= 30 && imc <= 34.9){
        situacao = 'Obesidade I'
        img.src = 'obesidade01.png' 
    }else if(imc >=35 && imc <= 39.9){
        situacao = 'Obesidade II'
    }else if (imc >= 40){
        situacao = 'Obesidade III'
    }else{
        situacao = 'Informe seu peso corretamente'
    }

    let pesoIdealMin = (18.5 * (altura * altura)).toFixed(1)
    let pesoIdealMax = (24.9 * (altura * altura)).toFixed(1)

    resultadoFinal.innerHTML = `
    Nome: ${nome}<br>
    Idade: ${idade}<br>
    Peso: ${peso}<br>
    Altura: ${altura}<br>
    <h3>Imc: ${imc}</h3><br>
    <h3>Situação: ${situacao}</h3>
    <h3>Peso Ideal: ${pesoIdealMin} kg - ${pesoIdealMax} kg</h3>`

    e.preventDefault()
})

btnLimpar.addEventListener('click', function() {
    resultadoFinal.innerHTML = ''
    document.querySelector('#imgSituacao').src = ''
    cxImc.value = '0.0'
})





