// Obtener el DOM

const lineaQuigon = document.getElementById('Quigon')
const lineaLuke = document.getElementById('Luke')
const lineaAhsoka = document.getElementById('Ahsoka')
const lineaSidious = document.getElementById('Sidious')
const lineaVader = document.getElementById('Vader')
const lineaMaul = document.getElementById('Maul')

// Obtener Venta del Local Storage 
let ventaQuigonGuardada = localStorage.getItem('Venta Quigon');
let ventaLukeGuardada = localStorage.getItem('Venta Luke');
let ventaAhsokaGuardada = localStorage.getItem('Venta Ahsoka');
let ventaSidiousGuardada = localStorage.getItem('Venta Sidious');
let ventaVaderGuardada = localStorage.getItem('Venta Vader');
let ventaMaulGuardada = localStorage.getItem('Venta Maul');

/*Mostrar datos almacenados*/    

lineaQuigon.innerHTML = ("Funko Quigon, total: $" +ventaQuigonGuardada)
lineaLuke.innerHTML = ("Funko Luke, total: $" +ventaLukeGuardada)
lineaAhsoka.innerHTML = ("Funko Luke, total: $" +ventaAhsokaGuardada)
lineaSidious.innerHTML = ("Funko Quigon, total: $" +ventaSidiousGuardada)
lineaVader.innerHTML = ("Funko Luke, total: $" +ventaVaderGuardada)
lineaMaul.innerHTML = ("Funko Luke, total: $" +ventaMaulGuardada)