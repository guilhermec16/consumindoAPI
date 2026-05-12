async function buscarDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const dados = await response.json()
    document.getElementById('dog').src = dados.message

}

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
    document.getElementById('resultadoReal').innerHTML = "Em dólar: $" + resultado.toFixed(2)

}
