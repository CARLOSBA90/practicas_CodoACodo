//variables
var precio = 200;


//funciones
function comenzar(){
    if (document.getElementById("precio")) {
        document.getElementById("precio").innerHTML = precio;   
      } 
}

function calcularResumen(){
    var cantidad = document.getElementById("cantidad").value;
    if (!cantidad == "" && cantidad > 0){
    let celdaInfoPagar = document.getElementById("infoPagar");
    switch(document.getElementById("categoria").value){
        case "Estudiante": 
                           celdaInfoPagar.innerHTML = "Total a pagar: $" + (precio * cantidad * 0.2);
                           break;
        case "Trainee":    
                           celdaInfoPagar.innerHTML = "Total a pagar: $" + (precio * cantidad * 0.5);
                           break;
        case "Junior":     
                          celdaInfoPagar.innerHTML = "Total a pagar: $" + (precio * cantidad * 0.85);
                           break;
        default:

    }
}else alert("Debe seleccionar una cantidad de tickets mayor a 1")

}




window.onload = comenzar();