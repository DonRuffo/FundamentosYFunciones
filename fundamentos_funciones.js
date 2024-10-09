//Almacenes Japon - Televisores
//Strings
let SmartLG = "Televisor LED Smart LG UR78 "
console.log(SmartLG.trim());
console.log(SmartLG.includes("LED"));
console.log(SmartLG.toLocaleUpperCase());
console.log(SmartLG.toLocaleLowerCase());
console.log(SmartLG.lenght);

// Objetos
const datosTVSamsung = {
  nombre: "Samsung QLED",
  modelo: "Q80T",
  marca: "Samsung",
  garantia: 36,
  estado: true,
};

let {nombre, modelo, marca, garantia, estado:status} = datosTVSamsung
console.log(nombre)
console.log(modelo)
console.log(marca)
console.log(garantia)
console.log(status)

// Casting

let precioTVSamsung = "799.99";
let precioTVLG = 899.99;

console.log(+precioTVSamsung + precioTVLG);

// Operador ternario

let resolucionTVSamsungQK = 4;
let resolucionTVLGQK = 8;

resolucionTVSamsung.length < resolucionTVLG.length 
  ? console.log("Gana TV LG en resolución") 
  : console.log("Gana TV Samsung en resolución");

// Función declarada

function getImagenTVSony() {
  console.log("photo/tv/SonyBravia.png");
}

getImagenTVSony();

// Función expresada

const activarModoDeNoche = function () {
  console.log("El modo de noche está activado");
};

activarModoDeNoche();

// Argumentos de la función

const aplicarDescuentoTelevisor = function (precio, descuento) {
  precio -= (precio * descuento) / 100;
  console.log(
    `El descuento es de ${descuento}% y el total a pagar es ${precio}` 
  ); // Usar backticks para interpolar
};

aplicarDescuentoTelevisor(1200, 20);
