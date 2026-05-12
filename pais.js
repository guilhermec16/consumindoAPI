async function pais() {
    const pais = document.getElementById('pais').value

    const response = await fetch(`https://restcountries.com/v3.1/name/${pais}`)

    const dados = await response.json()
    document.getElementById('bandeira').src = dados[0].flags.png
    document.getElementById('capital').innerHTML = dados[0].capital
    document.getElementById('populacao').innerHTML = dados[0].population
}