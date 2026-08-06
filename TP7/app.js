let eje1 = document.querySelector("#eje1")
let botonEje1 = document.querySelector("#botonEje1")
let edad = 15


botonEje1.onclick = function () {
  if (edad >= 18) {
    eje1.textContent = "Sos mayor de edad"
  } else {
    eje1.textContent = "Sos menor de edad"
  }
}

let eje2 = document.querySelector("#eje2")
let botonEje2 = document.querySelector("#botonEje2")
let NombreUsuario = 'Marcos'

botonEje2.onclick = function () {
  if (NombreUsuario == "Nahuel") {
    eje2.textContent = "Bienvenido Nahuel,¿Como estas?"
  } else {
    eje2.textContent = "Bienvenido usuario"
  }
}

let eje3 = document.querySelector("#eje3")
let botonEje3 = document.querySelector("#botonEje3")
botonEje3.onclick = function () {
  if ((NombreUsuario == "Nahuel") || (NombreUsuario == "Marcos")) {
    eje3.textContent = "Bienvenido " + NombreUsuario + "¿Como estas?"
  } else {
    eje3.textContent = "Bienvenido usuario"
  }
}

let eje4 = document.querySelector("#eje4")
let botonEje4 = document.querySelector("#botonEje4")
let numero = 145
botonEje4.onclick = function () {
  if (numero > 0) {
    eje4.textContent = "El numero es positivo"
   } if (numero < 0) {
    eje4.textContent = "El numero es negativo"
  } if (numero == 0) {
    eje4.textContent = "El numero es igual a 0"
  }

}