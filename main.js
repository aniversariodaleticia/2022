function pegarVotos(){
    url = "https://getpantry.cloud/apiv1/pantry/8df87e2e-cdbd-4832-b741-51fea8f1fc1c/basket/votacaoPicole"
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return JSON.parse(request.responseText)
}

function votar(){
    nome = document.getElementById('nome').innerHTML
    voto = document.querySelector("input[name='sabores']:checked").value
    console.log(nome)
    console.log(voto)
    document.getElementById('botao').innerHTML = "Confirmado!!";
    document.getElementById('botao').disabled = true;
    
    comeco = "{\""

    json = comeco.concat(nome, "\":\"", voto, "\"}" )
    
    url = "https://getpantry.cloud/apiv1/pantry/8df87e2e-cdbd-4832-b741-51fea8f1fc1c/basket/votacaoPicole"
    let request = new XMLHttpRequest()
    request.open("PUT", url, false)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(json)
}



