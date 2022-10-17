function pegarVotos(){
    url = "https://getpantry.cloud/apiv1/pantry/8df87e2e-cdbd-4832-b741-51fea8f1fc1c/basket/votacaoPicole"
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return JSON.parse(request.responseText)
}

function votar(key){
    votos = pegarVotos()

    for (var j in votos){
        if (j == key){
            votos[j] += 1
        }
    }
    
    url = "https://getpantry.cloud/apiv1/pantry/8df87e2e-cdbd-4832-b741-51fea8f1fc1c/basket/votacaoPicole"
    let request = new XMLHttpRequest()
    request.open("POST", url, false)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(votos))
}


console.log(pegarVotos())
votar("brigadeiro")
console.log(pegarVotos())

