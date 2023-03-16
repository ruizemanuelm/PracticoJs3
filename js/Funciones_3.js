const a = parseFloat(prompt("ingresa un lado del rectangulo"))
const b = parseFloat(prompt("ingresa el otro lado del rectangulo"))

const perimetro = (a,b) => {
    return 2*(a+b)
}
alert("el perimetro del rectangulo es " + perimetro(a,b)) 