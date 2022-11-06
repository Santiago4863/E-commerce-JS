//Funcion constructora

catalogo = []
class Anteojos {
    constructor(id, marca, modelo, color, sexo, precio) {
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.sexo = sexo
        this.precio = precio

    }
    agregaranteojo(object) {
        catalogo.push(object)


    }
}


const Anteojo1 = new Anteojos(1, "Ray Ban", "Aviator", "Dorado", "Hombre", 11000)
Anteojo1.agregaranteojo(Anteojo1)
const Anteojo2 = new Anteojos(2, "Ray Ban", "Julie", "Marron", "Mujer", 10000)
Anteojo2.agregaranteojo(Anteojo2)
const Anteojo3 = new Anteojos(3, "Vulk", "The guardian", "Negras", "Hombre", 10600)
Anteojo3.agregaranteojo(Anteojo3)
const Anteojo4 = new Anteojos(4, "Vulk", "Harry", "Negro", "Mujer", 13100)
Anteojo4.agregaranteojo(Anteojo4)
const Anteojo5 = new Anteojos(5, "Ray Ban ", "Jackie ohh", "Negro", "Mujer", 12700)
Anteojo5.agregaranteojo(Anteojo5)
const Anteojo6 = new Anteojos(6, "Ray Ban", "Miss Burbank kids", "Negro", "Niño", 9000)
Anteojo6.agregaranteojo(Anteojo6)
console.log(catalogo)

//Funcion para agregar anteojos

function agregaranteo() {
    marca = prompt("Ingrese la marca de los anteojos")
    modelo = prompt("Ingrese el modelo de los anteojos")
    color = prompt("Ingrese el color de los anteojos")
    sexo = prompt("Ingrese el sexo de los anteojos")
    precio = parseInt(prompt("Ingrese el precio de los anteojos"))
    anteojonuevo = new Anteojos(catalogo.length + 1, marca, modelo, color, sexo, precio)
    anteojonuevo.agregaranteojo(anteojonuevo)
}

//Funcion para ver catalogo con for of
const carrito = []
function vercatalogo() {
    const list = []
    let num = 0
    for (let anteojo of catalogo) {
        num += 1
        let anteo = `${num}- ${anteojo.marca} ${anteojo.modelo} -- $${anteojo.precio}\n`
        list.push(anteo)

    }
    let eleccion = parseInt(prompt(`${list.join("")}${catalogo.length + 1}- Volver al menu principal \n Si le interesa un modelo, elija la opcion`))
    console.log(eleccion)
    if (eleccion == catalogo.length + 1) {
        menu()

    }
    let anteoencontrado = catalogo.find(x => x.id == eleccion)
    if (anteoencontrado != undefined) {
        let comprar = prompt(`Anteojos: ${anteoencontrado.marca} ${anteoencontrado.modelo} \nColor: ${anteoencontrado.color}\nSexo: ${anteoencontrado.sexo} \nPrecio: $${anteoencontrado.precio}\n Quieres agregar al carrito estos Anteojos?`)
        if (comprar.toLowerCase() == 'si') {
            // let elegido = ` Marca: ${anteoencontradao.marca} Modelo: ${anteoencontrado.modelo} Color: ${anteoencontrado.color} Sexo: ${anteoencontrado.sexo} --$${anteoencontrado.precio} \n`

            carrito.push(anteoencontrado)
            vercarrito()


        } else {
            menu()
        }
    } else {
        alert(`La opcion (${eleccion} no es valida, intentelo de nuevo)`)
        menu()
    }

}

//Funcion carrito

const carritofinal = []
let total = 0
function vercarrito() {

    for (let anteo of carrito) {
        carritofinal.push(`${anteo.id}- ${anteo.marca} ${anteo.modelo} -- $${anteo.precio}\n`)
        total += parseInt(anteo.precio)
        carrito.splice(anteo)

    }

    confirmar = parseInt(prompt(` Carrito: \n ${carritofinal.join("")}\n ${carritofinal.length + 1}- Volver al menu  \n Quieres comprar los siguientes productos? \n10- Eliminar todos los productos\n 11- Finalizar compra`))
    switch (confirmar) {
        case 10:
            alert('Porductos eliminados correctamente')
            carritofinal.splice(0, carritofinal.length)
            menu()
            break
        case 11:
            let confirmacion = prompt(`Su total es de $${total}. Quiere confirmar la compra?`)
            if (confirmacion.toLowerCase() == 'si') {
                alert("Gracias por su compra,vuelva pronto")
                total = 0
            } else {
                menu()
            }

            carritofinal.splice(0, carritofinal.length)
            break
        case carritofinal.length + 1:
            menu()
            break
        default:
            alert(`Ingrese una opción correcta`)

    }

}

//Funcion de orden superior con Find

function buscarmarca() {
    let marca = prompt("Que marca quiere buscar?")
    let marcaencontrada = catalogo.find(
        (anteo) => anteo.marca.toLowerCase() == marca.toLowerCase()
    )
    if (marcaencontrada == undefined) {
        alert(`No hay ningun anteojo de la marca ${marca} en el catalogo`)
    } else {
        let decision = prompt(`Anteojo: ${marcaencontrada.marca} ${marcaencontrada.modelo} \nColor: ${marcaencontrada.color}\nSexo: ${marcaencontrada.sexo} \nPrecio: $${marcaencontrada.precio}\n Quieres agregar estos anteojos al carrito?`)
        if (decision.toLowerCase() == 'si') {
            // let elegido = ` Marca: ${anteoencontrada.marca} Modelo: ${anteoencontrada.modelo} Color: ${anteoencontrada.color} Sexo: ${anteoencontrada.sexo} --$${anteoencontrada.precio} \n`

            // carritofinal.push(`${marcaencontrada.id}- ${marcaencontrada.marca} ${marcaencontrada.modelo} -- $${marcaencontrada.precio}\n`)
            // vercarrito()
            carrito.push(marcaencontrada)
            vercarrito()
        }
    }
}

//Switch

let exit = false
function menu() {

    let opcion = parseInt(prompt("1- Ver catalogo de Anteojos \n2- Agregar nuevos Anteojos \n3- Buscar Anteojos \n4- Ver Carrito/ Finalizar Compra \n5- Salir del menu "))
    console.log(opcion)
    switch (opcion) {
        case 1:
            vercatalogo()
            break
        case 2:
            agregaranteo()
            break
        case 3:
            buscarmarca()
            break
        case 4:
            vercarrito()
            break
        case 5:
            exit = true
            break




    }
}

while (exit != true) {
    menu()
}
