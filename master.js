const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const horas = document.getElementById("horas");
const escribeUsuario = document.querySelector(".tiempoUsuario");
const valoresUsuario = document.querySelector(".botonResult")

valoresUsuario.addEventListener('click',Usuario)

function Usuario(){
    if(minutos.value >= 0 && minutos.value <= 59,segundos.value >= 0 && segundos.value <= 59){
let laHora = horas.value;
let losMinutos = minutos.value;
let losSegundos = segundos.value;
if(minutos.value > 9,segundos.value > 9){
escribeUsuario.textContent = `${laHora}:${losMinutos}:${losSegundos}`;
}else{
    escribeUsuario.textContent = `${laHora}:0${losMinutos}:0${losSegundos}`;
}
}else{
    alert("Debe introducir datos entre 0 y 59 minutos y segundos")
    minutos.value = ""
    segundos.value = ""
}
}