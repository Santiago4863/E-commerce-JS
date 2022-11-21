// PRODUCTOS
const productos = [
    // Hombre
    {
        id: "hombre-01",
        titulo: "Hombre Ray-Ban",
        imagen: "./img/hombre/hombre-1.jpg",
        categoria: {
            nombre: "Hombres",
            id: "hombre"
        },
        precio: 11000
    },
    {
        id: "hombre-02",
        titulo: "Hombre Ray-Ban",
        imagen: "./img/hombre/hombre-2.jpg",
        categoria: {
            nombre: "Hombres",
            id: "hombre"
        },
        precio: 10000
    },
    {
        id: "hombre-03",
        titulo: "Hombre Ray-Ban",
        imagen: "./img/hombre/hombre-3.jpg",
        categoria: {
            nombre: "Hombres",
            id: "hombre"
        },
        precio: 10500
    },
    {
        id: "hombre-04",
        titulo: "Hombre Bangue",
        imagen: "./img/hombre/hombre-4.jpg",
        categoria: {
            nombre: "Hombres",
            id: "hombre"
        },
        precio: 11500
    },
    {
        id: "hombre-05",
        titulo: "Hombre Ray-Ban",
        imagen: "./img/hombre/hombre-5.jpg",
        categoria: {
            nombre: "Hombres",
            id: "hombre"
        },
        precio: 9000
    },
    // Mujer
    {
        id: "mujer-01",
        titulo: "Mujer Bangue",
        imagen: "./img/mujer/mujer-1.jpg",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 14000
    },
    {
        id: "mujer-02",
        titulo: "Mujer Bangue",
        imagen: "./img/mujer/mujer-2.jpg",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 12000
    },
    {
        id: "mujer-03",
        titulo: "Mujer Ray-Ban",
        imagen: "./img/mujer/mujer-3.jpg",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 13600
    },
    {
        id: "mujer-04",
        titulo: "Mujer Bangue",
        imagen: "./img/mujer/mujer-4.jpg",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 19000
    },
    {
        id: "mujer-05",
        titulo: "Mujer Bangue",
        imagen: "./img/mujer/mujer-5.jpg",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 10000
    },
    {
        id: "mujer-06",
        titulo: "Mujer Bangue",
        imagen: "./img/mujer/mujer-6.jpg",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 8000
    },
    {
        id: "mujer-07",
        titulo: "Mujer Ray-Ban",
        imagen: "./img/mujer/mujer-7.jpg",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 11000
    },
    {
        id: "mujer-08",
        titulo: "Mujer Bangue",
        imagen: "./img/mujer/mujer-8.jpg",
        categoria: {
            nombre: "Mujer",
            id: "mujer"
        },
        precio: 13800
    },
    // Niños
    {
        id: "niño-01",
        titulo: "Niños Rip Curl",
        imagen: "./img/niños/niños-1.jpg",
        categoria: {
            nombre: "Niños",
            id: "niño"
        },
        precio: 7000
    },
    {
        id: "niño-02",
        titulo: "Niños Rip Curl",
        imagen: "./img/niños/niños-2.jpg",
        categoria: {
            nombre: "Niños",
            id: "niño"
        },
        precio: 8000
    },
    {
        id: "niño-03",
        titulo: "Niños Bangue",
        imagen: "./img/niños/niños-3.jpg",
        categoria: {
            nombre: "Niños",
            id: "niño"
        },
        precio: 6800
    },
    {
        id: "niño-04",
        titulo: "Niños Bangue",
        imagen: "./img/niños/niños-4.jpg",
        categoria: {
            nombre: "Niños",
            id: "niño"
        },
        precio: 8300
    },
    {
        id: "niño-05",
        titulo: "Niños Rip Curl",
        imagen: "./img/niños/niños-estuche.jpg",
        categoria: {
            nombre: "Niños",
            id: "niño"
        },
        precio: 2000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
