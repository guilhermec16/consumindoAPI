async function clima() {
    const cidade = document.getElementById('cidade').value

    const response = await fetch(``)
    const chave = "194448f2d8536e82d4549d611f1300fa"

    const dados = await response.json()
    document.getElementById('bandeira').src = dados[0].flags.png
    document.getElementById('capital').innerHTML = dados[0].capital
    document.getElementById('populacao').innerHTML = dados[0].population
}