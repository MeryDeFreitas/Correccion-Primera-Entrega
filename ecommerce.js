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

let carritoQuigon = document.getElementById('carritoQuigon')
let carritoLuke = document.getElementById('carritoLuke')
let carritoAhsoka = document.getElementById('carritoAhsoka')

let Sidious = document.getElementById('funkoSidious')
let Vader = document.getElementById('funkoVader')
let Maul = document.getElementById('funkoMaul')

let carritoSidious = document.getElementById('carritoSidious')
let carritoVader = document.getElementById('carritoVader')
let carritoMaul = document.getElementById('carritoMaul')

let carritoFinal = document.getElementById('carritoFinal')
let mostrarTotal = document.getElementById('mostrarTotal')
let mostrarTotal2 = document.getElementById('mostrarTotal2')

// Declaro variables globales que se usarán en las funciones

let CantidadVendidaQuingon = 0;
let CantidadVendidaLuke = 0;
let CantidadVendidaAhsoka = 0;

let CantidadVendidaSidious = 0;
let CantidadVendidaVader = 0;
let CantidadVendidaMaul = 0;

let vendido = false;

// Aqui armo el carrito segun lo que escoja el usuario

class carrito {
    constructor(nombre, precio, unidades) {
        this.nombre  = nombre;
        this.precio  = parseInt(precio);
        this.unidades = parseInt(unidades)
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

    carritoQuigon.innerHTML = ("Funko Quigon, unidades: " + cantidadSeleccionada +" , total: $" +ventaFinalQuigon)
    ventaTotal()
    console.log(nuevoStockQuin)
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

    carritoLuke.innerHTML = ("Funko Luke, unidades: " + cantidadSeleccionada +" , total: $" +ventaFinalLuke)
    ventaTotal()
    console.log(nuevoStockLuke)
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

    carritoAhsoka.innerHTML = ("Funko Ahsoka, unidades: " + cantidadSeleccionada +" , total: $" +ventaFinalAhsoka)
    ventaTotal()
    console.log(nuevoStockAhsoka)
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

    carritoSidious.innerHTML = ("Funko Darth Sidious, unidades: " + cantidadSeleccionada +" , total: $" +ventaFinalSidious)
    ventaTotal()
    console.log(nuevoStockSidious)
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

    carritoVader.innerHTML = ("Funko Darth Vader, unidades: " + cantidadSeleccionada +" , total: $" +ventaFinalVader)
    ventaTotal()
    console.log(nuevoStockVader)
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

    carritoMaul.innerHTML = ("Funko Darth Maul, unidades: " + cantidadSeleccionada +" , total: $" +ventaFinalMaul)
    ventaTotal()
    console.log(nuevoStockMaul)
    }
}

// console.log(carritoSuma)

// Sumo y muestro lo que lleva el carrito agregado, subtotales y total a pagar

function ventaTotal(){
    let sum = 0;
    for (var i = 0; i < carritoSuma.length; i ++){
        sum += carritoSuma[i].precio
    }
    // console.log(sum);
    mostrarTotal.innerHTML = ("Total a pagar por su compra es de $" + sum )
    mostrarTotal2.innerHTML = ("Haga click aqui para continuar con el pago")
}

//filtro por precio

let Producto1 = document.getElementById('Producto1')
let Producto2 = document.getElementById('Producto2')
let Producto3 = document.getElementById('Producto3')
let Producto4 = document.getElementById('Producto4')
let Producto5 = document.getElementById('Producto5')
let Producto6 = document.getElementById('Producto6')

const rango = document.getElementById('Rango')

rango.onchange = () => {
    let precio = rango.value
    MostrarRango.innerHTML = rango.value
    console.log(precio)
    if (precio <=20) {
        Producto2.classList.add('FiltroDesaparecer')
        Producto3.classList.add('FiltroDesaparecer')
        Producto5.classList.add('FiltroDesaparecer')
        Producto6.classList.add('FiltroDesaparecer')
      } else if (precio > 20 && precio < 50){
        Producto2.classList.add('FiltroDesaparecer')
        Producto1.classList.add('FiltroDesaparecer')
        Producto5.classList.add('FiltroDesaparecer')
        Producto4.classList.add('FiltroDesaparecer')
      } else if(precio = 50){
        Producto1.classList.add('FiltroDesaparecer')
        Producto3.classList.add('FiltroDesaparecer')
        Producto4.classList.add('FiltroDesaparecer')
        Producto6.classList.add('FiltroDesaparecer')
      }
}

// Busqueda sencilla

const busqueda = document.getElementById("Busqueda")
busqueda.addEventListener('keypress', buscar)

function buscar(e){
    if(e.keyCode === 13){
        let buscar = document.getElementById('Busqueda').value;
        if(buscar == "Quigon" || buscar == "Luke" || buscar == "Ahsoka" || buscar == "Sidious" || buscar == "Vader" || buscar =="Maul"){
            alert("Tenemos el producto")
        } else {
            alert ("Producto no disponible")
        }
        console.log(buscar)
    }
}


// Falta usar localstorage
