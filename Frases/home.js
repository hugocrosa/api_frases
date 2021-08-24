function frase(url) {
    let request = new XMLHttpRequest
    request.open("GET", url, false)
    request.send()
    return request.responseText
    
}

function main(){
    document.body.innerHTML= (frase("https://api.adviceslip.com/advice"));
    
}

main()

window.setTimeout(function () {
    window.location.reload();
  }, 30000);