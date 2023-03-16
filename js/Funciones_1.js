let num = prompt("Introduce un número entero");
 
let resultado = par_impar(num);

alert("El número "+num+" es "+resultado);
function par_impar(num) {
    if (num % 2 === 0) {
        return "par"
    } else {
        return "impar"
    }
}