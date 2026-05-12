async function buscarDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const dados = await response.json()
    document.getElementById('dog').src = dados.message

}