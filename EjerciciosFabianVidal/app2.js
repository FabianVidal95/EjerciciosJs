//ejercicio 1
function ejercicioMultiplicar(){
    let num = parseInt(prompt("ingrese el numero a multiplicar"));
    console.log ("tabla de multiplicar del "+ num + ":");
    for(let i=1;i<=10;i++){
        console.log(num + " x " + i + " = " + (num*i));
    }
}
ejercicioMultiplicar();

//ejercicio 2
function ejercicioValor0(){
    let num1;
    let suma =0;
    do{
        num1 = parseInt(prompt("ingrese un numero"));
        suma += num1;
    } while(num1!==0);
    console.log("el total acumulado es: " + suma)
}
ejercicioValor0();

//ejercicio 3
function adivinar(){
    let numAdivinar = Math.floor(Math.random()*100)+1;
    let numIntentos = 0;
    let num3;
    do{
        num3 = parseInt(prompt("ingresa un numero del 1 al 100"));
        numIntentos++;
        if (num3<numAdivinar){
            alert("el numero ingresado es menor, sigue intentando")
        }
        else if(num3>numAdivinar){
            alert("el numero ingresado es mayor, sigue intentando")
        }
     }
     while(num3!==numAdivinar);
     alert("felicidades, adivinaste el numero: " + numAdivinar + "en " + numIntentos + " intentos");
}
adivinar();

//ejercicio 4
function esPrimo(numero) {
    
    if (numero <= 1) {
        return false;
    }

    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

var numeroUsuario = parseInt(prompt("Ingrese un número para verificar si es primo:"));


if (esPrimo(numeroUsuario)) {
    console.log(numeroUsuario + " es un número primo.");
} else {
    console.log(numeroUsuario + " no es un número primo.");
}


//ejercio 5
function encontrarDivisores(numero) {
    let divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

let numero = parseInt(prompt("Ingrese un número para hallar sus divisores:"));

let divisores = encontrarDivisores(numero);
console.log("Los divisores de " + numero + " son: " + divisores.join(", "));

//ejercicio 6

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Los elementos del array son:");
for (let i = 0; i < array.length; i++) {
    console.log("Elemento " + (i + 1) + ": " + array[i]);
}

//ejercicio 7

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("El doble de cada elemento del array es:");
for (let i = 0; i < numeros.length; i++) {
    let doble = numeros[i] * 2;
    console.log("El doble de " + numeros[i] + " es " + doble);
}

//ejercicio 8
let familia = [
    { nombre: "FRancisco", edad: 28, relacion: "Padre", profesion: "Ingeniero" },
    { nombre: "Carmen", edad: 32, relacion: "Madre", profesion: "Doctora" },
    { nombre: "Fabian", edad: 10, relacion: "Hijo", profesion: "Estudiante" },
    { nombre: "AAndrea", edad: 8, relacion: "Hija", profesion: "Estudiante" },
    { nombre: "Ray", edad: 60, relacion: "Abuelo", profesion: "Jubilado" }
];

console.log("Presentación de los miembros de la familia:");
familia.forEach(function(persona) {
    console.log("Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", Relación: " + persona.relacion + ", Profesión: " + persona.profesion);
});

//ejercicio 9

let numer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Números impares del array:");
for (let i = 0; i < numer.length; i++) {
    if (numer[i] % 2 !== 0) {
        console.log(numer[i]);
    }
}

//ejercicio 10
function esPar(numero) {
    return numero % 2 === 0;
}

function sumaParesImpares() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let numero;

    do {
        numero = parseInt(prompt("Ingrese un número entero (0 para finalizar):"));
        if (numero !== 0) {
            if (esPar(numero)) {
                sumaPares += numero;
            } else {
                sumaImpares += numero;
            }
        }
    } while (numero !== 0);

    console.log("La suma de los números pares es: " + sumaPares);
    console.log("La suma de los números impares es: " + sumaImpares);
}

sumaParesImpares();