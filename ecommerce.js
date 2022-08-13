// Un carrito de productos que suma y hace subtotales para pagar es JS

// Productos a la venta

const funkoQuigon = {
    nombre:"Quigon", 
    precio: 20,
    stock: 10,
}

const funkoLuke = {
    nombre:"Luke", 
    precio: 50,
    stock: 8,
}

const funkoAhsoka = {
    nombre:"Ahsoka", 
    precio: 30,
    stock: 6,
}

const funkoSidious = {
    nombre:"Sidious", 
    precio: 20,
    stock: 10,
}

const funkoVader = {
    nombre:"Vader", 
    precio: 50,
    stock: 8,
}

const funkoMaul = {
    nombre:"Maul", 
    precio: 30,
    stock: 6,
}

// Tomo mis elementos del DOM para poder mostrar en la web

let Quigon = document.getElementById('funkoQuin')
let Luke = document.getElementById('funkoLuke')
let Ahsoka = document.getElementById('funkoAhsoka')

let cantidadVendidaQuigon = document.getElementById('cantidadVendidaQuigon')
let carritoQuigon = document.getElementById('carritoQuigon')
let cantidadVendidaLuke = document.getElementById('cantidadVendidaLuke')
let carritoLuke = document.getElementById('carritoLuke')
let cantidadVendidaAhsoka = document.getElementById('cantidadVendidaAhsoka')
let carritoAhsoka = document.getElementById('carritoAhsoka')

let carritoFinal = document.getElementById('carritoFinal')

let Sidious = document.getElementById('funkoSidious')
let Vader = document.getElementById('funkoVader')
let Maul = document.getElementById('funkoMaul')

let cantidadVendidaSidious = document.getElementById('cantidadVendidaSidious')
let carritoSidious = document.getElementById('carritoSidious')
let cantidadVendidaVader = document.getElementById('cantidadVendidaVader')
let carritoVader = document.getElementById('carritoVader')
let cantidadVendidaMaul = document.getElementById('cantidadVendidaMaul')
let carritoMaul = document.getElementById('carritoMaul')

// Declaro variables globales que se usarán en las funciones

let CantidadVendidaQuingon = 0;
let CantidadVendidaLuke = 0;
let CantidadVendidaAhsoka = 0;

let CantidadVendidaSidious = 0;
let CantidadVendidaVader = 0;
let CantidadVendidaMaul = 0;

let vendido = false;
let total = 0;

// Aqui armo el carrito segun lo que escoja el usuario

class carrito {
    constructor(nombre, precio, unidades) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
        this.unidades = parseInt(unidades)
    }
    sumaVenta() {
        return total = this.unidades * this.precio
    }
}

// A donde voy a mandar los productos seleccionados por el usuario

let carritoSuma = [];

// Que hara js con cada click

// Cantidad a comprar lo toma de lo que seleccione el usuario en desplegable

Quigon.addEventListener('click',ventaQuigon)

function ventaQuigon(){
    vendido = true
    let nombre = funkoQuigon.nombre
    let precio = funkoQuigon.precio
    let desplegable = document.getElementById('cantidad1')
    let cantidadSeleccionada = desplegable[desplegable.selectedIndex].value;
    let nuevoStockQuin = funkoQuigon.stock - cantidadSeleccionada

    if (vendido == true){

        ventaFinalQuigon = cantidadSeleccionada * funkoQuigon.precio

        const ventaQuigon = {
            nombre: nombre,
            precio: precio,
            unidades: cantidadSeleccionada,
        }

    carritoSuma.push(new carrito(ventaQuigon.nombre, ventaQuigon.precio, ventaQuigon.unidades));

    carritoQuigon.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalQuigon)
    cantidadVendidaQuigon.innerHTML = ("Quedan " + nuevoStockQuin + " Funkos de Quigon")
}}

Luke.addEventListener('click',ventaLuke)

function ventaLuke(){
    vendido = true
    let nombre= funkoLuke.nombre
    let precio = funkoLuke.precio
    let desplegable = document.getElementById('cantidad2')
    let cantidadSeleccionada = desplegable[desplegable.selectedIndex].value;
    let nuevoStockLuke = funkoLuke.stock - cantidadSeleccionada
    if (vendido == true){

        ventaFinalLuke = cantidadSeleccionada * funkoLuke.precio

        const ventaLuke = {
            nombre: nombre,
            precio: precio,
            unidades : cantidadSeleccionada
        }
        
    carritoSuma.push(new carrito(ventaLuke.nombre, ventaLuke.precio, ventaLuke.unidades));

    carritoLuke.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalLuke)
    cantidadVendidaLuke.innerHTML = ("Quedan " + nuevoStockLuke + " Funkos de Luke")
}}

Ahsoka.addEventListener('click', ventaAhsoka)

function ventaAhsoka(){
    vendido = true
    let nombre= funkoAhsoka.nombre
    let precio = funkoAhsoka.precio
    let desplegable = document.getElementById('cantidad3')
    let cantidadSeleccionada = desplegable[desplegable.selectedIndex].value;
    let nuevoStockAhsoka = funkoAhsoka.stock - cantidadSeleccionada
    if (vendido == true){
        ventaFinalAhsoka = cantidadSeleccionada * funkoAhsoka.precio

        const ventaAhsoka = {
            nombre: nombre,
            precio: precio,
            unidades : cantidadSeleccionada
        }
        
    carritoSuma.push(new carrito(ventaAhsoka.nombre, ventaAhsoka.precio, ventaAhsoka.unidades));

    carritoAhsoka.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalAhsoka)
    cantidadVendidaAhsoka.innerHTML = ("Quedan " + nuevoStockAhsoka + " Funkos de Ahsoka")
    } 
}

Sidious.addEventListener('click',ventaSidious)

function ventaSidious(){
    vendido = true
    let nombre= funkoSidious.nombre
    let precio = funkoSidious.precio
    let desplegable = document.getElementById('cantidad4')
    let cantidadSeleccionada = desplegable[desplegable.selectedIndex].value;
    let nuevoStockSidious = funkoSidious.stock - cantidadSeleccionada
    if (vendido == true){
        ventaFinalSidious = cantidadSeleccionada * funkoSidious.precio

        const ventaSidious = {
            nombre: nombre,
            precio: precio,
            unidades : cantidadSeleccionada
        }
        
    carritoSuma.push(new carrito(ventaSidious.nombre, ventaSidious.precio, ventaSidious.unidades));

    carritoSidious.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalSidious)
    cantidadVendidaSidious.innerHTML = ("Quedan " + nuevoStockSidious + " Funkos de Darth Sidious")
    }
}

Vader.addEventListener('click',ventaVader)

function ventaVader(){
    vendido = true
    let nombre= funkoVader.nombre
    let precio = funkoVader.precio
    let desplegable = document.getElementById('cantidad5')
    let cantidadSeleccionada = desplegable[desplegable.selectedIndex].value;
    let nuevoStockVader = funkoVader.stock - cantidadSeleccionada
    if (vendido == true){
        ventaFinalVader = cantidadSeleccionada * funkoVader.precio

        const ventaVader = {
            nombre: nombre,
            precio: precio,
            unidades : cantidadSeleccionada
        }
        
    carritoSuma.push(new carrito(ventaVader.nombre, ventaVader.precio, ventaVader.unidades));

    carritoVader.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalVader)
    cantidadVendidaVader.innerHTML = ("Quedan " + nuevoStockVader + " Funkos de Darth Vader")
    }
}

Maul.addEventListener('click',ventaMaul)

function ventaMaul(){
    vendido = true
    let nombre= funkoMaul.nombre
    let precio = funkoMaul.precio
    let desplegable = document.getElementById('cantidad6')
    let cantidadSeleccionada = desplegable[desplegable.selectedIndex].value;
    let nuevoStockMaul = funkoMaul.stock - cantidadSeleccionada
    if (vendido == true){
        ventaFinalMaul = cantidadSeleccionada * funkoMaul.precio

        const ventaMaul = {
            nombre: nombre,
            precio: precio,
            unidades : cantidadSeleccionada
        }
        
    carritoSuma.push(new carrito(ventaMaul.nombre, ventaMaul.precio, ventaMaul.unidades));

    carritoMaul.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalMaul)
    cantidadVendidaMaul.innerHTML = ("Quedan " + nuevoStockMaul + " Funkos de Darth Maul")
    }
}

// Muestro lo que lleva el carrito agregado
// Me falta totalizar este carrito y mostrarlo

console.log(carritoSuma)

// Me falta sumar carrito, debo usar un for

// Debo agregar busqueda o filtro

const busqueda = document.getElementById("Busqueda")
busqueda.addEventListener('keypress', buscar)

function buscar(e){
    if(e.keyCode === 13){
        alert("Toco enter") 
    }
}

// Falta usar localstorage
