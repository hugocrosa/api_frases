api()
function conselho(url) {
   let request = new XMLHttpRequest();
   request.open("GET", url, false);
   request.send();
   let advice = request.responseText;
   let json = JSON.parse(advice);
   return json.slip.advice;
 
    }
    //Exibição da frase
    function api(){
       document.body.innerHTML = (conselho("https://api.adviceslip.com/advice"));

      }

  //CONTADOR
  function startTimer(duration, display) {
   var timer = duration, minutes, seconds;
   setInterval(function () {
       minutes = parseInt(timer / 60, 10);
       seconds = parseInt(timer % 60, 10);
       minutes = minutes < 10 ? "0" + minutes : minutes;
       seconds = seconds < 10 ? "0" + seconds : seconds;
       display.textContent = minutes + ":" + seconds;
       if (--timer < 0) {
           timer = duration;
       }
   }, 1000);
}

window.onload = function () {
   var duration = 60 * 0.5; // Converter para segundos
       display = document.querySelector('#timer'); // selecionando o timer
   startTimer(duration, display); // iniciando o timer
};

setTimeout(function() {
   window.location.reload(1);
 }, 31000);