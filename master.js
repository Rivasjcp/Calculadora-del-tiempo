/* Realizar una calculadora que permite restar y sumar horas, minutos y segundos

- Como primer paso se debe establecer toda la parte visual basica en hyml y css y crear los id, los input y las etiquetas para que se escriban las acciones establecidas
- Luego escribir los const que estableceran la relacion de los id y las querySelector o clases
- Primero el usuario escribira las horas, minutos y segundos por defecto y se comprobara por medio de un condifcional if si los valores suministrados en segundos y minutos estan entre 0 y 59
- Luego de tomar los datos se escribiran y arrojaran en pantalla

Nota a investigar como sumar numeros y que se transformen en horas minutos y segundos

- Si tengo 70 segundos debo tomar un condicional donde tenga 
*/


let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let horas = document.getElementById("horas");

const escribeUsuario = document.querySelector(".tiempoUsuario");
const valoresUsuario = document.querySelector(".botonResult");

// const sumarMinutos = document.getElementById("sumaMinutos");
const sumarSegundos = document.getElementById("sumaSegundos");
// const sumarHoras = document.getElementById("sumaHoras");
 const escribirTransformar = document.querySelector(".escribirtrans"); // Para mostrar
 const transBoton = document.querySelector(".transforSeg") // Boton de suma



valoresUsuario.addEventListener('click',Usuario)

 function Usuario(){
     if(minutos.value >= 0 && minutos.value <= 59){
         if(segundos.value >= 0 && segundos.value <= 59){
            var laHora = horas.value;
            var losMinutos = minutos.value;
            var losSegundos = segundos.value;

            laHora = (laHora < 10)? `0${laHora}` : laHora;
            losMinutos = (losMinutos < 10)? `0${losMinutos}` : losMinutos;
            losSegundos = (losSegundos < 10)? `0${losSegundos}` : losSegundos;
            escribeUsuario.textContent = `Hora Introducida: ${laHora}:${losMinutos}:${losSegundos}`;
            console.log(laHora);
            console.log(losMinutos);
            console.log(losSegundos);
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
     return `${laHora}:${losMinutos}:${losSegundos}`;
 }

console.log(Usuario())

transBoton.addEventListener('click',TransformarSeg)

function TransformarSeg(){
    var sapo = sumarSegundos.value;
    if(sapo > 0){
        var segAHora = Math.floor(sapo / 3600);
        segAHora = (segAHora < 10)? '0' + segAHora : segAHora;
        var segAmin = Math.floor((sapo / 60) % 60);
        segAmin = (segAmin < 10)? '0' + segAmin : segAmin;
        var seg = sapo % 60;
        seg = (seg < 10)? '0' + seg : seg;
        escribirTransformar.textContent = `Hora Transformada: ${segAHora}:${segAmin}:${seg}`;
    }else{
        alert("Los valores no pueden ser negativos");
        sumarSegundos.textContent = "";
        escribirTransformar.textContent = "";
    }

}



// valorDeSuma.addEventListener('click',sumaUsuario)

// function segundosAMinutos(){
//     var losSeg = sumarSegundos.value;
//     var losMin = Math.floor((losSeg / 60) % 60);
//     return losMin
// }

// function segundosAHoras(){
//     var losSeg = sumarSegundos.value;
//     var lasHor = Math.floor(losSeg / 3600);
//     return lasHor
// }

// function minutosAHoras(){
//     var losMin = sumarMinutos.value;
//     var lasHor =  Math.floor(losMin / 60)
//     return lasHor
// }


// function sumaUsuario(){
//     if(sumarMinutos.value >= 0){
//         if(segundos.value >= 0){
//             let horaSumada = sumarHoras.value;
//             let minutosSumados = sumarMinutos.value;
//             let segundosSumados = sumarSegundos.value;

//             horaSumada = (horaSumada < 10)? "0" + horaSumada : horaSumada;
//             minutosSumados = (minutosSumados < 10)? "0" + minutosSumados : minutosSumados;
//             segundosSumados = (segundosSumados < 10)? "0" + segundosSumados : segundosSumados; 

//             // escribeUsuario.textContent = `Hora Introducida: ${laHora}:${losMinutos}:${losSegundos}`;
//         }else{
//             alert("Debe introducir un valor no negativo")
//             sumarMinutos.value = ""
//             sumarSegundos.value = ""
//             // escribeUsuario.textContent = ""
//         }
//     }else{
//         alert("Debe introducir un valor no negativo")
//         sumarMinutos.value = ""
//         sumarSegundos.value = ""
//         // escribeUsuario.textContent = ""
//     }
// }

//Probando Date






// var sumarsesion = 5;
// console.log(fecha.getMinutes() + ":" + (fecha.setMinutes(fecha.getMinutes() + sumarsesion) && fecha.getMinutes()));

