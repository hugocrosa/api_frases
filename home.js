main()
function frase(url) {
   let request = new XMLHttpRequest();
   request.open("GET", url, false);
   request.send();
   let advice = request.responseText;
   let json = JSON.parse(advice);
   return json.slip.advice;
 
    }
    
    function main(){
       document.body.innerHTML= (frase("https://api.adviceslip.com/advice"));

       document.body.style.fontSize = '24px';
       document.body.style.color = 'green';
       document.body.style.fontFamily = 'arial';
       document.body.style.border = "thick solid #008000";

      }
   
   
   

    



