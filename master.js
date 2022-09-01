/* Realizar una calculadora que permite restar y sumar horas, minutos y segundos

- Como primer paso se debe establecer toda la parte visual basica en hyml y css y crear los id, los input y las etiquetas para que se escriban las acciones establecidas
- Luego escribir los const que estableceran la relacion de los id y las querySelector o clases
- Primero el usuario escribira las horas, minutos y segundos por defecto y se comprobara por medio de un condifcional if si los valores suministrados en segundos y minutos estan entre 0 y 59
- Luego de tomar los datos se escribiran y arrojaran en pantalla

Nota a investigar como sumar numeros y que se transformen en horas minutos y segundos

- Si tengo 70 segundos debo tomar un condicional donde tenga 
*/

const showTime = document.getElementById('showtime-input');
const showTimePlus = document.getElementById('writeTime');
const transBoton = document.querySelector('.transforSeg'); // Tranformar segundos a horas
// const botonValores = document.getElementById("botonResult")
const timeInput = document.getElementById('time-input'); // Input de tiempo
const tranSeg = document.getElementById("sumaSegundos");
const botonSuma = document.getElementById("sumalas");

const getTimeInputValue = () => new Date(`August 31, 2022 ${timeInput.value}`);

// botonValores.addEventListener("click",handleSetValues)

  const horas = () => getTimeInputValue().getHours();
  const minutos = () => getTimeInputValue().getMinutes();
  const segundos = () => getTimeInputValue().getSeconds();

  let mostrar = () => [horas(),minutos(),segundos()]
  setInterval(function(){console.log(mostrar())},1000);
//  setInterval(function(){console.log(horas())},1000);

transBoton.addEventListener('click', TransformarSeg);

function TransformarSeg() {
  const seconds = tranSeg.value;
  if (seconds => 0) {
    let segAHora = Math.floor(seconds / 3600);
    segAHora = segAHora < 10 ? '0' + segAHora : segAHora;
    let segAmin = Math.floor((seconds / 60) % 60);
    segAmin = segAmin < 10 ? '0' + segAmin : segAmin;
    let seg = seconds % 60;
    seg = seg < 10 ? '0' + seg : seg;
    showTime.value = `${segAHora}:${segAmin}:${seg}`;
  } else {
    alert('Los valores no pueden ser negativos');
    sumarSegundos.textContent = '';
    escribirTransformar.textContent = '';
  }
}

const getTimeInputValue2 = () => new Date(`August 31, 2022 ${showTime.value}`);
const getTimeInputValue3 = () => new Date("August 31, 2022 00:00:00");

botonSuma.addEventListener("click",function(){
  let laSuma = () => new Date(getTimeInputValue().getTime() + getTimeInputValue2().getTime() - getTimeInputValue3().getTime());
  
  showTimePlus.textContent = `${laSuma().getHours()}:${laSuma().getMinutes()}:${laSuma().getSeconds()}`
  setInterval(function(){console.log(showTimePlus.value)},1000);
})



// // const getTimeInputValue3 = () => new Date(`December 25, 1995 00:00:00`);

const transHoras = () => getTimeInputValue2().getHours();
const transMinutos = () => getTimeInputValue2().getMinutes();
const tranSegundos = () => getTimeInputValue2().getSeconds();



getTimeInputValue3().setHours( horas() + transHoras(), minutos() + transMinutos(), segundos() + tranSegundos())



//Probando Date

// var sumarsesion = 5;
// console.log(fecha.getMinutes() + ":" + (fecha.setMinutes(fecha.getMinutes() + sumarsesion) && fecha.getMinutes()));