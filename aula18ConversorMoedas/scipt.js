function converter(){
    let valorReal = document.querySelector('#inpValor').value
    let dolar = document.querySelector('#dolar')
    let euro = document.querySelector('#euro')
    let libra = document.querySelector('#libra')
    let btc = document.querySelector('#bitcoin')
    let res = document.querySelector('#resultado')

    if(dolar.checked){
        let convert = (valorReal/6).toFixed(2)
        res.innerHTML = `O valor em Dolar é ${convert} USD`
    }else if(euro.checked){
        let convert = (valorReal/7).toFixed(2)
        res.innerHTML = `O valor em Euro é ${convert} EUR` 
    }else if(libra.checked){
        let convert = (valorReal/9).toFixed(2)
        res.innerHTML = `O valor em Libra é ${convert} LBR`
    }else if(btc.checked){
        let convert = (valorReal / 6000).toFixed(5)
        res.innerHTML = `O valor em Bitcoin é ${convert} BTC`
    }    
}
