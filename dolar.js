async function cotacao() {

    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")

    const dados = await response.json()

    const valor = dados.USDBRL.bid
    document.getElementById('valorDolar').innerHTML = "Dólar atual: R$ " + valor

}

async function realParaDolar() {

    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")

    const dados = await response.json()

    const cotacao = dados.USDBRL.bid

    const real = document.getElementById('real').value

    const resultado = real / cotacao
    document.getElementById('resultadoReal').innerHTML ="Em dólar: $" + resultado.toFixed(2)

}


async function dolarParaReal() {

    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")

    const dados = await response.json()

    const cotacao = dados.USDBRL.bid

    const dolar = document.getElementById('dolar').value

    const resultado = dolar * cotacao
    document.getElementById('resultadoDolar').innerHTML ="Em real: R$ " + resultado.toFixed(2)

}
