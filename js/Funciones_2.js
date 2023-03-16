let msj = prompt("Introduce una cadena de texto");
 
let resultado = cadena(msj);

alert ("la cadena - "+ msj +" - esta formada por "+ resultado);

function cadena(msj) {
    if (msj === msj.toUpperCase()) {
        return "mayusculas"
    } else if (msj === msj.toLowerCase()){
        return  "minusculas"
    } else{
        return  "mayusculas y minusculas"
    } 
}