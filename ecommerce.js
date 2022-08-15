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
let mostrarTotal = document.getElementById('mostrarTotal')
let mostrarTotal2 = document.getElementById('mostrarTotal2')

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

    cantidadVendidaQuigon.innerHTML = ("Unidades adquiridas " + cantidadSeleccionada)
    carritoQuigon.innerHTML = ("A pagar por este producto: $" + ventaFinalQuigon)
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

    cantidadVendidaLuke.innerHTML = ("Unidades adquiridas " + cantidadSeleccionada)
    carritoLuke.innerHTML = ("A pagar por este producto: $" + ventaFinalLuke)
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

    cantidadVendidaAhsoka.innerHTML = ("Unidades adquiridas " + cantidadSeleccionada)
    carritoAhsoka.innerHTML = ("A pagar por este producto: $" + ventaFinalAhsoka)
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

    cantidadVendidaSidious.innerHTML = ("Unidades adquiridas " + cantidadSeleccionada)
    carritoSidious.innerHTML = ("A pagar por este producto: $" + ventaFinalSidious)
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

    cantidadVendidaVader.innerHTML = ("Unidades adquiridas " + cantidadSeleccionada)
    carritoVader.innerHTML = ("A pagar por este producto: $" + ventaFinalVader)
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

    cantidadVendidaMaul.innerHTML = ("Unidades adquiridas " + cantidadSeleccionada)
    carritoMaul.innerHTML = ("A pagar por este producto: $" + ventaFinalMaul)
    }
}

// Muestro lo que lleva el carrito agregado

// console.log(carritoSuma)

carritoFinal.addEventListener('click',ventaTotal)

function ventaTotal(){
    let sum = 0;
    for (var i = 0; i < carritoSuma.length; i ++){
        sum += carritoSuma[i].precio
    }
    console.log(sum);
    mostrarTotal.innerHTML = ("Total a pagar es de $" + sum )
    mostrarTotal2.innerHTML = ("Haga click aqui para continuar con el pago")
}

//filtro por precio



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

// Login

const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

// Falta usar localstorage
