

// Variables del desafio
//let Tamaño = document.querySelector ("tamaño")
//let Reiniciar = document.querySelector ("reiniciar")

// Estado original de las variables
/*let TextoOriginal = parrafo.textContent
let ColorOriginal = black
let FondoOriginal = palevioletred
let LetraOriginal = Georgia, 'Times New Roman', Times, serif
let TamañoOriginal = 24px 
*/

let btnfondo = document.querySelector ("#btnFondo")
btnfondo.onclick = function () {
    Parrafo.style.backgroundColor = 'blue'
}

let btntexto = document.querySelector ("#btnTexto")
btntexto.onclick = function () {
    Parrafo.textContent = " Buen dia a todos"
}

let btnletra = document.querySelector ("#btnLetra")
btnletra.onclick = function () {
    Parrafo.style.color = " white"
}

let tipoletra = document.querySelector ( "#btnTipoLetra")
btntipoletra.onclick = function () {
    Parrafo.style.fontFamily = "Arial, Helvetica, sans-serif"
}


let btntamaño = document.querySelector ("#btnTamaño")
btntamaño.onclick = function () {
    Parrafo.style.fontSize  = "24px"
}

let Reiniciar = document.querySelector ("#btnReinicio")

