// Registro

let registroSend = document.getElementById('Registro')

registroSend.addEventListener('Click', registro)

function registro (){
    alert("Hola")
    console.log("Registro")
    let usuario = document.getElementById("Usuario").value;
    let contrasena = document.getElementById("Contrasena").value;

    console.log(usuario)
    console.log(contrasena)
    window.location="carrito.html"
}

//Login
