let eje1 = document.querySelector("#eje1")
let botonEje1 = document.querySelector("#botonEje1")
let edad = document.querySelector("#In1")

botonEje1.onclick = function () {
  if (edad.value >= 18) {
    eje1.textContent = "Sos mayor de edad"
  } else {
    eje1.textContent = "Sos menor de edad"
  }
}

let eje2 = document.querySelector("#eje2")
let botonEje2 = document.querySelector("#botonEje2")
let NombreUsuario =  document.querySelector("#InputEje2")

botonEje2.onclick = function () {
   if (NombreUsuario.value == "Nahuel") {
    eje2.textContent = "Bienvenido Nahuel,¿Como estas?"
  } else {
    eje2.textContent = "Bienvenido usuario"
  }
}

let eje3 = document.querySelector("#eje3")
let botonEje3 = document.querySelector("#botonEje3")
let inputEje3 = document.querySelector("#InputEje3")

botonEje3.onclick = function () {
 
  if ((NombreUsuario.value == "Nahuel") || (NombreUsuario.value == "Marcos")) {
    eje3.textContent = "Bienvenido " + NombreUsuario + "¿Como estas?"
  } else {
    eje3.textContent = "Bienvenido usuario"
  }
}

let eje4 = document.querySelector("#eje4")
let botonEje4 = document.querySelector("#botonEje4")
let numero = document.querySelector("#InputEje4")


botonEje4.onclick = function () {
  if (numero.value > 0) {
    eje4.textContent = "El numero es positivo"
   } else if (numero.value < 0) {
    eje4.textContent = "El numero es negativo"
   } else {
    eje4.textContent = "El numero es igual a 0"
  }

}

let eje5 = document.querySelector("#eje5")
let botonEje5 = document.querySelector("#botonEje5")
let Edad =  document.querySelector("#InputEje5")

botonEje5.onclick = function () {
  if ((Edad.value >= 6  && Edad.value <= 11 )) {
    eje5.textContent = "La edad corresponde a un niño"
  } else if (Edad.value >= 12 && Edad.value <= 18) {
    eje5.textContent = "La edad corresponde a un adolescente"
  } else if (Edad.value >= 19 && Edad.value <= 26) {
    eje5.textContent = "La edad corresponde a un joven"
  } else if (Edad.value >=27 && Edad.value <=59) {
    eje5.textContent = "La edad corresponde a un adulto"
  } else if (Edad.value >= 60) {
    eje5.textContent = "La edad corresponde a un anciano"
  } else {
    eje5.textContent = "La edad no se encuentra en el sistema"
  }

}

let eje6 = document.querySelector("#eje6");
let botonEje6 = document.querySelector("#botonEje6");
let Dia = document.querySelector("#InputEje6");
botonEje6.onclick = function () {
  if (( Dia.value == "lunes") || (Dia.value == "martes") || (Dia.value == "miercoles") || (Dia.value == "jueves") || (Dia == "viernes")) {
    eje6.textContent = "Es un dia laborable."
  } else if (( Dia.value == "sabado") || (Dia.value == "domingo")) {
    eje6.textContent = "No es un dia laborable.";
  }
}

let eje7 = document.querySelector("#eje7")
let botonEje7 = document.querySelector("#botonEje7")
let contrasenia = document.querySelector("#InputEje7") 
botonEje7.onclick = function () {
  if (contrasenia.value == "secreto") {
    eje7.textContent = "Acceso concedido."
  } else {
    eje7.textContent = "Acceso denegado."
  }
}