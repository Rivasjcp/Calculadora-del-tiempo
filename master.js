/* Realizar una calculadora que permite restar y sumar horas, minutos y segundos

- Como primer paso se debe establecer toda la parte visual basica en hyml y css y crear los id, los input y las etiquetas para que se escriban las acciones establecidas
- Luego escribir los const que estableceran la relacion de los id y las querySelector o clases
- Primero el usuario escribira las horas, minutos y segundos por defecto y se comprobara por medio de un condifcional if si los valores suministrados en segundos y minutos estan entre 0 y 59
- Luego de tomar los datos se escribiran y arrojaran en pantalla

Nota a investigar como sumar numeros y que se transformen en horas minutos y segundos

- Si tengo 70 segundos debo tomar un condicional donde tenga 
*/


const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const horas = document.getElementById("horas");
const escribeUsuario = document.querySelector(".tiempoUsuario");
const valoresUsuario = document.querySelector(".botonResult")

let laHora = horas.value;
let losMinutos = minutos.value;
let losSegundos = segundos.value;

valoresUsuario.addEventListener('click',Usuario)

function Usuario(){
    if(minutos.value >= 0 && minutos.value <= 59){
        if(segundos.value >= 0 && segundos.value <= 59){
            let laHora = horas.value;
            let losMinutos = minutos.value;
            let losSegundos = segundos.value;

            laHora = (laHora < 10)? "0" + laHora : laHora;
            losMinutos = (losMinutos < 10)? "0" + losMinutos : losMinutos;
            losSegundos = (losSegundos < 10)? "0" + losSegundos : losSegundos;

            escribeUsuario.textContent = `Hora Introducida: ${laHora}:${losMinutos}:${losSegundos}`;
        }else{
            alert("Debe introducir datos entre 0 y 59 minutos y segundos")
            minutos.value = ""
            segundos.value = ""
            escribeUsuario.textContent = ""
        }
    }else{
        alert("Debe introducir datos entre 0 y 59 minutos y segundos")
        minutos.value = ""
        segundos.value = ""
        escribeUsuario.textContent = ""
    }
}





//Probando Date

var fecha = new Date();
var sumarsesion = 5;
console.log(fecha.getMinutes() + ":" + (fecha.setMinutes(fecha.getMinutes() + sumarsesion) && fecha.getMinutes()));

