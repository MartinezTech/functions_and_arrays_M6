function nombreCompleto(nombre, apellido){
    var fullname = nombre + " " + apellido;
    return fullname;
}
var nombre = window.prompt("Enter your first name: ");
var apellido = window.prompt("Introduce tu apellido: ");
document.getElementById("fullname").innerHTML = "Bienvenido " + nombreCompleto(nombre, apellido);