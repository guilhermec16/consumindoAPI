async function clima() {
    const cidade = document.getElementById('cidade').value

    const chave = "194448f2d8536e82d4549d611f1300fa"
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${chave}`)
    

    const dados = await response.json()
    document.getElementById('temperatura').innerHTML = dados.main.temp
    document.getElementById('tempMax').innerHTML = dados.main.temp_max
    document.getElementById('tempMin').innerHTML = dados.main.temp_min
    document.getElementById('vento').innerHTML = dados.wind.speed
    document.getElementById('umidade').innerHTML = dados.main.humidity
    
}