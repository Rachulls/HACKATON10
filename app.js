// 1. Función que tome como parámetro un arreglo, retornar el último elemento del arreglo.

function ultimoNumero(arr1) {
  if (arr1.length > 0) {
    return arr1[arr1.length - 1];
  } else {
    return null;
  }
}

let arr1 = [5, 3, 7, 6];
let resultado = ultimoNumero(arr1);
// console.log(resultado);

// 2. Función que tome como parámetro un arreglo y un número, retornar un nuevo arreglo con todos los elementos y el número agregado al final del arreglo.

function numeroAgregado(arr, num) {
  const nuevoarr = [...arr, num];
  return nuevoarr;
}

let arreglo2 = [3, 6, 8, 1];
let num = 13;
let nuevoarr = numeroAgregado(arreglo2, num);
// console.log(nuevoarr);

// 3. Función que tome como parámetro un arreglo de números, retornar el promedio de todos los elementos del arreglo.

function promedio(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const suma = arr.reduce((acumulador, elemento) => acumulador + elemento, 0);
  const promedio = suma / arr.length;
  return promedio;
}

let arreglo3 = [2, 5, 8, 4, 9];
let resultadoPromedio = promedio(arreglo3);
// console.log(resultadoPromedio);

//  4. Función que tome como parámetro un arreglo de números, retornar un dato de tipo número con la suma de todos los números pares.

function sumaPares(arr) {
  let numPares = [];
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      suma = suma + arr[i];
    }
  }
  return suma;
}

let arreglo4 = [3, 4, 8, 2, 5, 8];
let numPares = sumaPares(arreglo4);
// console.log(numPares);

// 5. Función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.

function booleanoArray(arr5, arr6) {
  const nuevoArr = arr5.concat(arr6);
  if (nuevoArr.length >= 10) {
    return true;
  } else {
    return false;
  }
}

const arr5 = [2, 4];
const arr6 = [4, 2, 5, 8, 5, 3, 1];
const result2 = booleanoArray(arr5, arr6);
// console.log("ArregloNuevo: " + arr5.concat(arr6));
// console.log(result);

// 6.  Función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos.

function funcionArray(arr7, arr8) {
  let arr9 = [];
  const nuevoArr = arr7.concat(arr8);
  for (let i = 0; i < nuevoArr.length; i++) {
    arr9.push(nuevoArr[i] * 2);
  }
  return arr9;
}

const arr7 = [2, 4, 6];
const arr8 = [1, 2, 3];
const result3 = funcionArray(arr7, arr8);
// console.log("ArregloNuevo: " + result3);

// 7. Programa que almacene la cadena de caracteres “password” en una variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas.

function contraseña() {
  const input = prompt("Introduce la contraseña: ");
  let output = "La contrase es incorrecta.";
  if (input.toLowerCase() === "password") {
    output = "La contraseña es correcta.";
  }
  return output;
}

// console.log(contraseña());

// 8.  programa para una empresa que tiene salas de juegos para todas las edades y quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€ y si es mayor de 18 años, 10€.

function salaJuegos() {
  const edad = prompt("Introduce tu edad: ");
  let output = "";
  if (edad <= 4) {
    output = "¡Puedes entrar gratis!";
  } else if (edad >= 5 && edad < 18) {
    output = "El costo de la entrada es 5€.";
  } else if (edad >= 18) {
    output = "El costo de la entrada es 10€.";
  }
  return output;
}

// console.log(salaJuegos());

// 9. Para tributar un determinado impuesto se debe ser mayor de 18 años y tener un ingreso igual o superior a 1000 € mensuales. Escribir un programa que pregunte al usuario su edad y sus ingresos  mensuales y muestre por pantalla si el usuario tiene que tributar o no.

function tributar() {
  const edad = prompt("Ingresa tu edad: ");
  let ingresos = prompt("¿Cuáles son tus ingresos mensuales?");
  let output = "";
  if (edad >= 18 && ingresos >= 1000) {
    output = "Sí tienes que tributar.";
  } else {
    output = "Aún no tienes que tributar.";
  }
  return output;
}

// console.log(tributar());

// 10. Crea un programa que pida al usuario el diámetro de una rueda y su grosor (en metros).

function diametroLlanta() {
  const diametro = prompt("Ingrese el diámetro de la rueda: ");
  const grosor = prompt("Ingrese el grosor de la rueda: ");
  let output = "";
  if (diametro > 1.4) {
    output = "La rueda es para un vehículo grande.";
  } else if (diametro <= 1.4 && diametro > 0.8) {
    output = "La rueda es para un vehículo mediano.";
  } else {
    output = "La rueda es para un vehículo pequeño.";
  }
  if (
    (diametro > 1.4 && grosor < 0.4) ||
    (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)
  ) {
    output = output + " El grosor para esta rueda es inferior al recomendado";
  }
  return output;
}
// console.log(diametroLlanta());

// 11. Se tienen los datos de cinco personas, crear funciones para:
// • Hallar quienes tienen el salario mayor a 1200.
// • Hallar quien es el primero que tiene como hobby cantar.
// • Devolver un booleano si al menos uno de ellos le gusta leer.

const personas = [
  { nombre: "boris", hobby: "correr", salario: 2000 },
  { nombre: "luis", hobby: "cantar", salario: 1500 },
  { nombre: "carmen", hobby: "cocinar", salario: 800 },
  { nombre: "percy", hobby: "cantar", salario: 1100 },
  { nombre: "rosa", hobby: "leer", salario: 3000 },
];

function salarioMayor() {
  return personas.filter((persona) => persona.salario > 1200);
}
// console.log(salarioMayor());

function hobbyCantar() {
  return personas.find((persona) => persona.hobby === "cantar");
}
// console.log(hobbyCantar());

function leer() {
  return personas.filter((persona) => persona.hobby === "leer").length > 0;
}
// console.log(leer());

// 12. Un servicio de atención al cliente tiene establecido turnos semanales para sus empleados de manera que cada día de la semana se encarga del servicio una persona:

const personal = [
  { dia: "lunes", nombre: "Maria" },
  { dia: "martes", nombre: "Luis" },
  { dia: "miercoles", nombre: "Antonia" },
  { dia: "jueves", nombre: "Pedro" },
  { dia: "viernes", nombre: "Marisa" },
];

function trabajador() {
  const dia = prompt("Ingrese el día: ");
  const nombre = personal.find(
    (trabajador) => trabajador.dia === dia.toLowerCase()
  );
  let output = "";
  if (nombre) {
    output = "Este día se encarga " + nombre.nombre + ".";
  } else {
    output = "No hay servicio.";
  }
  return output;
}
// console.log(trabajador());

// 13. Una tienda vende monitores, teclados y ratones. Los precios se almacenan en una estructura array conde cada elemento es un par producto - precio. Diseña una función que reciba como argumento el nombre de un producto que previamente ha sido consultado por prompt y devuelva su precio.

const productos = [
    {producto: "monitor", precio: "200"},
    {producto: "teclado", precio: "20"},
    {producto: "raton", precio: "10"},
];

function tienda(){
    const compra = prompt("Ingrese el producto a consultar: ");
    const producto = productos.find((producto) => producto.producto === compra.toLowerCase());
    let output = "";
    if (producto){
        output = producto.precio;
    } else {
        output = "Producto no encontrado.";
    }
    return output;
}
// console.log(tienda());