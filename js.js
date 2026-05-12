async function consumindoapi() {
    const cep = document.getElementById('cep').value

    if (cep.length < 8) {
        alert("Informe no máximo 8 números!")
        return
        
    }
    
 try{
    const response = await fetch (`https://viacep.com.br/ws/${cep}/json/`)

    const dados = await response.json()

    if(!response.ok){
        alert("CEP não encontrado!!")
        return
    }
    document.getElementById('rua').value = dados.logradouro
    document.getElementById('estado').value = dados.estado
    document.getElementById('cidade').value = dados.localidade

 } catch(error)
{

} }



async function cotacao() {

    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")

    const dados = await response.json()

    const valor = dados.USDBRL.bid

    document.getElementById('valorDolar').innerHTML =
    "Dólar atual: R$ " + valor

}



async function realParaDolar() {

    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")

    const dados = await response.json()

    const cotacao = dados.USDBRL.bid

    const real = document.getElementById('real').value

    const resultado = real / cotacao

    document.getElementById('resultadoReal').innerHTML =
    "Em dólar: $" + resultado.toFixed(2)

}



async function dolarParaReal() {

    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")

    const dados = await response.json()

    const cotacao = dados.USDBRL.bid

    const dolar = document.getElementById('dolar').value

    const resultado = dolar * cotacao
    document.getElementById('resultadoDolar').innerHTML ="Em real: R$ " + resultado.toFixed(2)

}



async function buscarDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const dados = await response.json()
    document.getElementById('imagemDog').src = dados.message

}