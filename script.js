//Acá el juego seleciona un número al azar para que adivines
let numeroAzar = Math.floor(Math.random()*100)+1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos= 0

//Esta acción se va a ejecutar cuando se toque el botón chequear
function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)
    intentos ++
    intento.textContent = intentos

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'por favor, introduce un número válido entre 1 y 100'
        mensaje.style.color = 'black';
        return
        
    }
    if(numeroIngresado === numeroAzar){
        mensaje.textContent= '!FELICITACIONES¡ !Has Adivinado El Número¡'
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '!Más alto¡ El número es mayor al que dijiste'
                mensaje.textContent = '!Más alto¡ El número es mayor al que dijiste'
        mensaje.style.color = 'red'
    }else{
        mensaje.textContent = '!Más bajo¡ El número es menor al que dijiste'
        mensaje.style.color = 'red'
    }
}