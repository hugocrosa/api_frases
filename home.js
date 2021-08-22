function fazerGet(url) {
    let request = new XMLHttpRequest
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario){

}

function main(){
   alert(fazerGet("https://api.adviceslip.com/advice"))
}

main()

