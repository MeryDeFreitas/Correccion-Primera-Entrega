// Un carrito de productos que suma y hace subtotales para pagar es JS

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


let CantidadVendidaQuingon = 0;
let CantidadVendidaLuke = 0;
let CantidadVendidaAhsoka = 0;

let CantidadVendidaSidious = 0;
let CantidadVendidaVader = 0;
let CantidadVendidaMaul = 0;

let vendido = false;
let total = 0;

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


let carritoJedi = [];
let carritoSith = [];

Quigon.addEventListener('click',ventaQuigon)

function ventaQuigon(){
    vendido = true
    let nombre = funkoQuigon.nombre
    let precio = funkoQuigon.precio
    let nuevoStockQuin = funkoQuigon.stock - CantidadVendidaQuingon
    if (vendido == true && nuevoStockQuin > 1){
        CantidadVendidaQuingon++
        ventaFinalQuigon = CantidadVendidaQuingon * funkoQuigon.precio

        const ventaQuigon = {
            nombre: nombre,
            precio: precio,
            unidades: CantidadVendidaQuingon,
        }

    carritoJedi.push(new carrito(ventaQuigon.nombre, ventaQuigon.precio, ventaQuigon.unidades));

    carritoQuigon.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalQuigon)
    cantidadVendidaQuigon.innerHTML = ("Quedan " + nuevoStockQuin + " Funkos de Quigon")
    } else{
        cantidadVendidaQuigon.innerHTML = ("Producto Agotado")
    }
}

Luke.addEventListener('click',ventaLuke)

function ventaLuke(){
    vendido = true
    let nombre= funkoLuke.nombre
    let precio = funkoLuke.precio
    let nuevoStockLuke = funkoLuke.stock - CantidadVendidaLuke
    if (vendido == true && nuevoStockLuke > 1){
        CantidadVendidaLuke++
        ventaFinalLuke = CantidadVendidaLuke * funkoLuke.precio

        const ventaLuke = {
            nombre: nombre,
            precio: precio,
            unidades : CantidadVendidaLuke
        }
        
    carritoJedi.push(new carrito(ventaLuke.nombre, ventaLuke.precio, ventaLuke.unidades));

    carritoLuke.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalLuke)
    cantidadVendidaLuke.innerHTML = ("Quedan " + nuevoStockLuke + " Funkos de Luke")
    } else{
        cantidadVendidaLuke.innerHTML = ("Producto Agotado")
    }
}

Ahsoka.addEventListener('click', ventaAhsoka)

function ventaAhsoka(){
    vendido = true
    let nombre= funkoAhsoka.nombre
    let precio = funkoAhsoka.precio
    let nuevoStockAhsoka = funkoAhsoka.stock - CantidadVendidaAhsoka
    if (vendido == true && nuevoStockAhsoka > 1){
        CantidadVendidaAhsoka++
        ventaFinalAhsoka = CantidadVendidaAhsoka * funkoAhsoka.precio

        const ventaAhsoka = {
            nombre: nombre,
            precio: precio,
            unidades : CantidadVendidaAhsoka
        }
        
    carritoJedi.push(new carrito(ventaAhsoka.nombre, ventaAhsoka.precio, ventaAhsoka.unidades));

    carritoAhsoka.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalAhsoka)
    cantidadVendidaAhsoka.innerHTML = ("Quedan " + nuevoStockAhsoka + " Funkos de Ahsoka")
    } else{
        cantidadVendidaAhsoka.innerHTML = ("Producto Agotado")
    }
}

console.log(carritoJedi)

Sidious.addEventListener('click',ventaSidious)

function ventaSidious(){
    vendido = true
    let nombre= funkoSidious.nombre
    let precio = funkoSidious.precio
    let nuevoStockSidious = funkoSidious.stock - CantidadVendidaSidious
    if (vendido == true && nuevoStockSidious > 1){
        CantidadVendidaSidious++
        ventaFinalSidious = CantidadVendidaSidious * funkoSidious.precio

        const ventaSidious = {
            nombre: nombre,
            precio: precio,
            unidades : CantidadVendidaSidious
        }
        
    carritoSith.push(new carrito(ventaSidious.nombre, ventaSidious.precio, ventaSidious.unidades));

    carritoSidious.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalSidious)
    cantidadVendidaSidious.innerHTML = ("Quedan " + nuevoStockSidious + " Funkos de Darth Sidious")
    } else{
        cantidadVendidaSidious.innerHTML = ("Producto Agotado")
    }
}

Vader.addEventListener('click',ventaVader)

function ventaVader(){
    vendido = true
    let nombre= funkoVader.nombre
    let precio = funkoVader.precio
    let nuevoStockVader = funkoVader.stock - CantidadVendidaVader
    if (vendido == true && nuevoStockVader > 1){
        CantidadVendidaVader++
        ventaFinalVader = CantidadVendidaVader * funkoVader.precio

        const ventaVader = {
            nombre: nombre,
            precio: precio,
            unidades : CantidadVendidaVader
        }
        
    carritoSith.push(new carrito(ventaVader.nombre, ventaVader.precio, ventaVader.unidades));

    carritoVader.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalVader)
    cantidadVendidaVader.innerHTML = ("Quedan " + nuevoStockVader + " Funkos de Darth Vader")
    } else{
        cantidadVendidaVader.innerHTML = ("Producto Agotado")
    }
}

Maul.addEventListener('click',ventaMaul)

function ventaMaul(){
    vendido = true
    let nombre= funkoMaul.nombre
    let precio = funkoMaul.precio
    let nuevoStockMaul = funkoMaul.stock - CantidadVendidaMaul
    if (vendido == true && nuevoStockMaul > 1){
        CantidadVendidaMaul++
        ventaFinalMaul = CantidadVendidaMaul * funkoMaul.precio

        const ventaMaul = {
            nombre: nombre,
            precio: precio,
            unidades : CantidadVendidaMaul
        }
        
    carritoSith.push(new carrito(ventaMaul.nombre, ventaMaul.precio, ventaMaul.unidades));

    carritoMaul.innerHTML = ("El total a pagar por su compra es: $" + ventaFinalMaul)
    cantidadVendidaMaul.innerHTML = ("Quedan " + nuevoStockMaul + " Funkos de Darth Maul")
    } else{
        cantidadVendidaMaul.innerHTML = ("Producto Agotado")
    }
}

console.log(carritoSith)