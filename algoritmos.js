/* 1. Un corredor de maratón (distancia 42,195 Km) ha recorrido la carrera en 2 horas 25 minutos. Se desea un 
algoritmo que calcule el tiempo medio en minutos por kilómetro.  */
let distancia=42.195;
let tiempoHora=2;
let tiempoMinutos=25;
function calcularMinutos(distancia,tiempoHoras,tiempoMinutos){
    let minutos=tiempoHoras*60;
    let minutosTotales=minutos+tiempoMinutos;
    
    /* en esta parte se divide la cantidad de minutos entre el total dekilometros  */
    let minutosKilometro=minutosTotales/distancia;

    return minutosKilometro;
 }
console.log('los minutos por kilometro',calcularMinutos(distancia,tiempoHora,tiempoMinutos));
console.warn('siguiente punto');

/////////////////////////////////////////////////////////////////////////////
/* 2. Realizar la conversión de una temperatura dada en grados Centígrados a grados Fahrenheit (Fórmula: F = 
    (9/5) C + 32).  */
    
function convertirFahrenheit(c){

    let F=c*(9/5)+32;
    return F;
}
console.log('los grados Fahrenheit',convertirFahrenheit(15));
console.warn('siguiente punto');
//////////////////////////////////////////////////////////////////////

/* 
3.Escribir el algoritmo que permite calcular la nota correspondiente al primer parcial de “análisis” para un 
estudiante cualquiera. Se debe considerar que hay dos talleres y un quiz, que en conjunto valen un 30% de 
la nota y el resto (70%) corresponde a la nota del examen parcial.
*/

let calificaciones=[['taller1',6.5],['taller2',5.5],['Quiz',6.5],['parcial',6.5]];
const base=10;
const ponderadoCalificacion=(calificacion,base)=>{

    let porcentaje=null;
    if(calificacion[0]=='parcial'){
        porcentaje=0.7;
    }else{
        porcentaje=0.1;
    }
    
   const ponderacion=((calificacion[1]*porcentaje)/base)*10
    return ponderacion;
}
let calificacionFinal=0;
calificaciones.forEach((calificacion)=>calificacionFinal+=ponderadoCalificacion(calificacion,base));
console.log('La nota final es',calificacionFinal);
console.warn('siguiente punto');

////////////////////////////

/*4. Un capital C está situado a un tipo de interés R anual ¿al término de cuántos años se doblará? 
I=CRt/100 
*/
const capital=2000;
const redito=10;
const anual=100;
const tiempo=2;
function cualcularInteres(capital,redito,anual,tiempo){
    let interesUnidad=(capital*redito*1)/anual;
    let interesTotal=interesUnidad*tiempo
    console.log('el interes anual',interesUnidad);
    console.log('el interes total',interesTotal);
    let doble=capital*2;
    let tiempo1=doble/interesUnidad;
    return tiempo1;
}
console.log('se doblara en ',cualcularInteres(capital,redito,anual,tiempo),' años');
console.warn('siguiente punto');
///////////////////////////
/* 
  5. Elaborar un algoritmo que permita ingresar 20 números y muestre todos los números menores e iguales a 
25.   
 */
let numeros=[151,25,24,27,28,2,1,4,7,5,6,0,2,89,3,78,20,21,22,66];
function numerosMayores(numeros){
 numerosMayores=numeros.filter(numero=>numero>=25);
//  console.log(numerosMayores.length);
 return numerosMayores;   
}
console.log('los numeros mayores o igualas a 25 son',numerosMayores(numeros));
console.warn('siguiente punto')

/* 6. Hacer un programa que sume 5 precios de camisas (en dólares) y que luego muestre el total de la venta en 
pesos.  */
//////////////////////
let ventas=[['camisa1',3.0],['camisa2',5.0],['camisa3',10.0],['camisa4',7.0],['camisa5',6.5]];
let TRM=4780;
let totalVentas=0;
let descripcionVentas=[];
for (let i = 0; i < ventas.length; i++) {
    let ventaPesos=ventas[i][1]*TRM;
    descripcionVentas.push([ventas[i][0],ventaPesos]);
    totalVentas+=ventaPesos;
}
console.log(descripcionVentas);
console.log('total ventas en pesos',totalVentas);
console.warn('siguiente punto')


/////////////////////
/*7. Hacer un programa que registre el consumo realizado por los clientes de un restaurante, si el consumo de 
cada cliente excede 50000 se hará un descuento del 20%. Se debe mostrar el pago de cada cliente y el total 
de todos los pagos. */
 let consumoMesas=[['Mesa1',5000],['Mesa2',60000],['Mesa3',70000],['Mesa4',25000],['Mesa5',80000]];
 
 function hacerDescuento(venta){
    let mesa=null,total=null, precioFinal=null;
    if(venta[1]>50000){
        mesa=venta[0];
        total=venta[1];
        precioFinal=venta[1]-venta[1]*0.2;
        console.log(`${mesa} precio total ${total} precio con descuento del 20%${precioFinal}`)
    return `${mesa} precio total ${total} precio con descuento del 20%${precioFinal}`;
    }
    /* console.log(`${mesa} precio total ${total} precio con descuento del 20%${precioFinal}`)
    return `${mesa} precio total ${total} precio con descuento del 20%${precioFinal}`; */
}
for (let i = 0; i < consumoMesas.length; i++) {
    
    hacerDescuento(consumoMesas[i]);    

}
console.warn('siguiente punto');
///////////////////////////////////////////

/*7. Hacer un programa que registre el consumo realizado por los clientes de un restaurante, si el consumo de 
cada cliente excede 50000 se hará un descuento del 20%. Se debe mostrar el pago de cada cliente y el total 
de todos los pagos.  */
let horaActual=[23,30,59];
function calcularHora(horaActual){
    let nuevaHora=horaActual;
    
    nuevaHora[2]+=1;
    
    if(nuevaHora[2]>59){
        nuevaHora[2]=0;
        //console.log(nuevaHora[2]);
        nuevaHora[1]+=1;

    }
    if(nuevaHora[1]>59){
        nuevaHora[1]=0;
        nuevaHora[0]+=1
    }
    if(nuevaHora[0]>24){
        nuevaHora[0]=1
    }
    let cadena=nuevaHora.toString();
    let horaConsola=cadena.replace(/,/g,':');
    console.log(horaConsola);
    return horaConsola;

}
let horaConsola=horaActual.toString().replace(/,/g,':')
let nuevaHora=calcularHora(horaActual);
console.log(horaConsola,nuevaHora);
console.warn('siguiente punto');
////////////////////////////////////////
/* 9. Dado N, escribir el producto desde 1 hasta N.*/
let resultado=null;

function calucularFactorial(n){
    resultado=1
    for(let i=1;i<=n;i++){

        resultado*=i;
    }
}
calucularFactorial(5);
console.log('factorial=',resultado);
console.warn('siguiente punto');
////////////////////////////////////////////////
/* Realizar un algoritmo que muestre por pantalla la tabla de multiplicar decreciente de cualquier número, 
ingresado entre el 1 y el 10.  */
let numero=5
for(i=10;i>=1;i--){
    console.log(numero*i);
}

 





































