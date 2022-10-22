//---Variables globales.---
let articulos = "";
let precio = 0;
let cantidad = 0;
let subTotal = 0;
let precioTotal = 0;
let totalNeto = 0;
let seguirComprando = false;
const IVA = 0.21;

//---Lista de articulos e ingreso de cantidad.---
do {
    articulos = prompt("¿Cual artículo deseas comprar?\n Arroz\n Fideos \n Aceite \n Azucar \n Sal \n Huevos").toLowerCase();
    cantidad = Number(prompt("¿Cuantos deseas llevar?"));
    //---Precios de cada articulo.---
    switch (articulos) {
        case "arroz":
            precio = 110;
            break;
        case "fideos":
            precio = 210;
            break;
        case "aceite":
            precio = 340;
            break;
        case "azucar":
            precio = 150;
            break;
        case "sal":
            precio = 130;
            break;
        case "huevos":
            precio = 80;
            break;
        default:
            alert("Hubo un error al ingresar los datos");
            precio = 0;
            cantidad = 0;
            break;
    }
    subTotal += precio * cantidad;
    precioTotal = IVA * subTotal;
    totalNeto = subTotal + precioTotal;
    seguirComprando = confirm("¿Quieres comprar más?");

} while (seguirComprando);

alert("El valor total de su compra con IVA es: " + "$" + totalNeto);


//---Calculo de cuotas.---
function monto1() {
    let monto1 = totalNeto;
    return monto1
}

//---Cuotas a pagar.---
function cuotas1() {
    let cuotas1 = Number(prompt("En cuantas cuotas quiere pagar, elija de 1 a 12"));
    return cuotas1
}
//---variables para la division monto entre cuotas.---
let monto = monto1()
let cuotas = cuotas1()


//---Funcion para dividir cantidad en cuotas.---
function dividir(dato1, dato2) {
    let resultado = dato1 / dato2;
    return resultado
}

//---Varible para la division del monto en cuotas.---
let division = dividir(monto, cuotas)

//---Resultado.---
alert("Usted debe pagar " + cuotas + " cuotas de: " + "$" + division)