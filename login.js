// Registro

let registroSend = document.getElementById('Registro')

registroSend.addEventListener('Click', registro)

function registro (){

    let usuario = document.getElementById("Usuario").value;
    let contrasena = document.getElementById("Contrasena").value;

    console.log(usuario)
    console.log(contrasena)
}

//Login

let InicioSesion = document.getElementById('InicioSesion')

InicioSesion.addEventListener('Click', login)

function login (){

    let UsuarioGuardado = document.getElementById("UsuarioGuardado").value;
    let ContraseñaGuardada = document.getElementById("ContraseñaGuardada").value;

    console.log(UsuarioGuardado)
    console.log(ContraseñaGuardada)
}