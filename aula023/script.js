let relogio = document.querySelector('#relogioDigital')
let h = document.querySelector('#h')
let m = document.querySelector('#m')
let s = document.querySelector('#s')

let hSmart = document.querySelector('#hSmart')
let mSmart = document.querySelector('#mSmart')
let sSmart = document.querySelector('#sSmart')
let data = document.querySelector('#data')
let semana = document.querySelector('#semana')

let dataHora = new Date()
//console.log(dataHora)

function moveRelogio(){
    let momentoAtual = new Date()

    let hora = new String(momentoAtual.getHours())
    let minuto = new String(momentoAtual.getMinutes())
    let segundo = new String(momentoAtual.getSeconds())

    if(segundo.length == 1) segundo = "0" + segundo
    if(minuto.length ==1) minuto = "0" + minuto
    if(hora.length ==1) hora = "0" + hora

    h.textContent = hora
    m.textContent = minuto
    s.textContent = segundo

    hSmart.textContent = hora
    mSmart.textContent = minuto
    sSmart.textContent = segundo

    setTimeout("moveRelogio()", 1000)
}

function pegarData(){
    let diaDaSemana = dataHora.getDay()
    let dia = new String(dataHora.getDate())
    let mes = new String(dataHora.getMonth()+1)
    let ano = dataHora.getFullYear()

    if(dia.length == 1) dia = "0" + dia
    if(mes.length == 1) mes = "0" + mes

    switch(diaDaSemana){
        case 0:
            diaDaSemana = 'DOM'
            break;
        case 1:
            diaDaSemana = 'SEG'
            break;
        case 2:
            diaDaSemana = 'TER'
            break;
        case 3:
            diaDaSemana = 'QUA'
            break;
        case 4:
            diaDaSemana = 'QUI'
            break;
        case 5:
            diaDaSemana = 'SEX'
            break;
        case 6:
            diaDaSemana = 'SAB'
            break;
    }

    let dataAtual = dia + '/' + mes + '/' + ano
    semana.textContent = diaDaSemana
    data.textContent = dataAtual
}

//evocar metodo de pegarData
pegarData()

var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

function getUserPosition() {
  let url = ''
  navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude
    let long = pos.coords.longitude
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=792e3fdd04f03879ea6b9e9f3dccb177`
    fetchApi(url)
    console.log(url)
  })
}

function fetchApi(url) {
  let city = document.querySelector('.city')
  let temperature = document.querySelector('#temp')
  let humidity = document.querySelector('#umidad')

  fetch(url)
  .then((data) => {
    return data.json()
  })
  .then((data) => {
    let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
    
    city.textContent      = data.name
    temperature.innerHTML = tempInCelsius
    humidity.innerHTML    = data.main.humidity
  })
  .catch((err) => {
    city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
    temperature.innerHTML = `-`;
  })
}

getUserPosition();



